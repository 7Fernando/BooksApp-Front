export const autorizacion = () => {
  let t = localStorage.getItem("token");
  return { headers: { authorization: `Bearer ${t}` } };
};

export const authorizationAdmin = () => {
  let t = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  return { headers: { authorization: `Bearer ${t}`, user: user } };
};
