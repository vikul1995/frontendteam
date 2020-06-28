import axios from "axios";

export default axios.create({
  baseURL: "http://enpneed-env.eba-8e3k88gh.us-east-2.elasticbeanstalk.com/public/index.php",
  /*headers:{
    'content-type': 'multipart/form-data',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzdhM2VkYmYyZjcxZjMwMjk4ZDE1NWZmYjM0ODExYTJiOTRkYTQxYTI3YTM2MzE2NmQ1OGU3YTdlZTY0ZTRiNzMzNzk3NWIyNzE4ZWJlMjAiLCJpYXQiOjE1OTI4MTg2NTAsIm5iZiI6MTU5MjgxODY1MCwiZXhwIjoxNjI0MzU0NjUwLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.vCV6qaqtLpQ5RSsQr6y9_RFpppuMPlBqI95_ZpT3WuO4cKSLUK6gTv7dBzqht7x88-ULGLTxaTlMxpSYjuod0QulwRC3Bwb6EupknzKTSPu1GDbzHUGRfEvmghS872dK6IQQsNbt9FCokEIezp3CKvzYEhu4ByYxVIbOOc7fWSSBzmyhx9iBXJ89Nzzow0v2b2d5TtlJAGz5CkQraw-tgeXoFWQk9isGISW8P0gmWigmahzNJ8rN5ZVb3hGd8BwaNpbPMhJvhSM8fOC_rNVLH1CTQerM4n6e-7ZDUcfxcuqOrwtX63KFpfpzjsPxE2-5agxykUh4ZIpWbwaeP7X6lx8yyBDWuCec--FHJwjncs1jI6Or1UgkD5jdMc4CCFYgTulJmQyBRQuysH1tAWPf4nR_5sMD99fu8oIAnfQDr8okvtWozDWxNgo0hrlJCNORdRkwP44Lmdn6DP1nihfJzbMPDC7kVhJbi_vgMZDJ036Nk7JfqAgc6bTaToTrTifemGh1NeXAoOYmsRvjfgas9MPoIZl4x9WjjgtocID-WcBDZTjrudjZ8wE02ngOsxZWc2mVOCelRw_mxEmpTDylDlPJN8qwqJftKf5dbznxdgUb6NH8ZvKPBn25Ei-DFq7yzD7p3sGQo4ni2eLrRu4X_Ok4UC8bf6RDxs8t8eySKFA'
  }*/
  
 headers: {
    'Content-Type': 'multipart/form-data',
      'authorization':'Bearer '+document.cookie.split('=')[1] 
  }
});

