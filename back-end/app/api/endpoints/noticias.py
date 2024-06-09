from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter()

NOTICIAS_URL = "https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${maxNewsQtd}"

def get_news(maxNewsQtd: int):
    url = NOTICIAS_URL.replace("${maxNewsQtd}", str(maxNewsQtd))
    response = httpx.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code, detail=response.text)

@router.get("/")
async def get_noticias(maxNewsQtd: int):
    return get_news(maxNewsQtd)

