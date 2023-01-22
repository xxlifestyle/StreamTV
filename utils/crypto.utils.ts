import crypto from "crypto-js"



 function encryptDataAES(data :string) :string{
     return crypto.AES.encrypt(data, "werq4guj1").toString();

}
  function decryptDataAES(data :string) :string{
      return crypto.AES.decrypt(data, "werq4guj1").toString(crypto.enc.Utf8)
 }

export {encryptDataAES, decryptDataAES}