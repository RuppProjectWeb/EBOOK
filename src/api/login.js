export const loginUser = async (values) => {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const text = await response.text();
    console.log("HTTP Status:", response.status);
    console.log("Raw Response:", text);
  
    const data = text ? JSON.parse(text) : {};
    console.log("Parsed JSON:", data);
  
    console.log("Login Success:", data);
  
    return data;
  };