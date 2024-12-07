import {
  doc,
  deleteDoc,
  collection,
  where,
  query,
  getDocs,
  updateDoc,
  setDoc,
  serverTimestamp
} from "firebase/firestore";
import {db} from "../../../../firebaseConfig";

const deleteAllChildComments = async (id) => {
  try {
    const q = query(
      collection(db,'Comments'),
      where('parent_id','==',id)
      )
    const data = await getDocs(q)
    const docs = data.docs.map(doc => doc.id)
    
    for(let doc_id of docs)
    await deleteDoc(doc(db,'Comments',doc_id))
    
  } catch (e) {
    throw new Error(e)
  }
}

export const actionReducer = 
(action) => {
  
  const {type,payload} = action
  
  if(type==='delete'){
  deleteDoc(doc(db,'Comments',payload.id))
  .then(() => deleteAllChildComments(payload.id))
  .catch((e) => console.log(e))
  }
  
  if(type==='edit'){
  updateDoc(doc(db,'Comments',payload.id),{comment:payload.text.trim()})
  .then(() => console.log('done'))
  .catch((e) => console.log(e))
  }
  
  if(type==='reply'){
  setDoc(
    doc(
      db,
      'Comments',
      payload.newcomment_id
      ),
    {
      comment_id:payload.newcomment_id,
      comment: payload.comment,
      commentcreatedat: serverTimestamp(),
      commentcreatedby: payload.user_uid,
      commentcreatedon: payload.place_id,
      status: true,
      repliedto: payload.repliedComment_user_name || null,
      parent_id: payload.repliedComment_parent_id === null ? payload.repliedComment_comment_id
        : 
        payload.repliedComment_parent_id
    }
  )
  .then(() => console.log('done'))
  .catch((e) => console.log(e))
  }
  
}