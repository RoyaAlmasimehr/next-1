export const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("خطا در دریافت اطلاعات");
  }
  const data = await response.json();
  console.log("Fetched Data:", data); 
  return data;
};
