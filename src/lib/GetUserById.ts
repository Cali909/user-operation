export default async function GetUserById(id: string) {
  try {
    let res = await fetch(`http://localhost:8000/users/${id}`, {
      cache: "no-store",
    });
    let data = await res.json();

    return data;
  } catch (err) {
    throw new Error("fetch user failed");
  }
}
