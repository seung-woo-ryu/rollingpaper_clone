import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/"
  });

export const DB_API = {
  peopleCNT: () => api.get("peoplecnt"),
  peopleName: (id,pw) => api.get(`peoplecnt/name?id=${id}&pw=${pw}`),
  getEmoji: (id,pw) => api.get(`peoplecnt/emoji?id=${id}&pw=${pw}`),
  saveCardInfo: (id, pw, content, fr, fontType, align, color, backgroundcolor,file) => api.post(`peoplecnt/savecardinfo`,{
      id:id,
      pw:pw,
      content:content,
      fr:fr,
      align:align,
      fonttype:fontType,
      color:color,
      backgroundcolor:backgroundcolor,
      img:file
  }).then((res)=>{
  }).catch((err)=>{
    console.log(err);
  }),
  saveEmoji:(id,pw,deltaX, deltaY,emoji) => api.post('peoplecnt/saveEmoji',{
    id:id,
    pw:pw,
    deltax:deltaX,
    deltay:deltaY,
    emoji:emoji
  })
} 