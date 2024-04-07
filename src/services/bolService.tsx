export const createBol = async (): Promise<string> => {
  const rawResponse = await fetch(
    'http://localhost:8080/v2/createTempBL',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        seller: "Shangan Automobiles",
        buyer: "Renault",
        amount: 150000,
        price: 1,
      })
    }
  )
  const content = await rawResponse;

  return content.text();
}
