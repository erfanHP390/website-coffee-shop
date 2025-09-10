import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password) => {
  const hashedPassword = hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data) => {
  const token = sign({ ...data }, process.env.PRIVATEKEY, {
    expiresIn: "10h", 
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const tokenPayload = verify(token, process.env.PRIVATEKEY);
    return tokenPayload;
  } catch (err) {
    console.log("access token verify is err", err);
    return false;
  }
};

const generateRefreshToken = (data) => {
  const token = sign({ ...data }, process.env.RefreshTokenSecretKey, {
    expiresIn: "7d",
  });
  return token;
};

const validatePhone = (phone) => {
  const regexPhone =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  return regexPhone.test(phone);
};

const validateEmail = (email) => {
  const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return regexEmail.test(email);
};

const validatePassword = (password) => {
  const regexPass =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return regexPass.test(password);
};

export {
  validatePhone,
  validateEmail,
  validatePassword,
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyToken,
  generateRefreshToken,
};
