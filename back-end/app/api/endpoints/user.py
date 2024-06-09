from typing import List
from fastapi import FastAPI, APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.models import User
from app.schemas.schemas import UserBase, UserCreate, User as UserSchema
from app.database.database import engine, get_db, Base

app = FastAPI()
router = APIRouter()

Base.metadata.create_all(bind=engine)


    
def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def get_user_by_id(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

def authenticate_user(db: Session, email: str, password: str):
    db_user = get_user_by_email(db, email=email)
    if db_user is None:
        return False
    if password!= db_user.hashed_password:
        return False
    return db_user

def create_user(db: Session, user: UserCreate):
    db_user = User(email=user.email, hashed_password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user



def delete_user(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if user:
        db.delete(user)
        db.commit()
        return user
    else:
        return None
    

@router.post("/login", response_model=UserSchema)
def login(email: str, password: str, db: Session = Depends(get_db)):
    user = authenticate_user(db, email, password)
    if not user:
        raise HTTPException(
            status_code=400, 
            detail="Incorrect email or password"
        )
    return user


@router.get("/", response_model=List[UserSchema])
def get_all_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users

@router.post("/register", response_model=UserSchema)
def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return create_user(db=db, user=user)


@router.get("/user/{user_id}", response_model=UserSchema)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = get_user_by_id(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@router.delete("/user/{user_id}", response_model=UserSchema)
def delete_user_endpoint(user_id: int, db: Session = Depends(get_db)):
    db_user = delete_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

app.include_router(router)
