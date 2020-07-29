<template>
        <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>    
        <div class="content-wrapper">
            
            <div class="content-body">
                <div id="user-profile">
                    <div class="row">
                        <div class="col-md-9">
                            
								<div class="central-meta">
                                    <div class="new-postbox">
                                        <figure style="display:inline-block;width:10%">
                                            <img src="../app-assets/images/ep-logo2.png" alt="" style="width:80%">
                                        </figure>
										
                                        <div class="newpst-input" style="">
                                            <form id="dsjd">
                                                <textarea rows="2" id="description" placeholder="write something" name="description" v-model="post.description"></textarea>

                                                <div class="p_img">
                                                    <img class="uploaded_img hidden" id="temp_img" src="https://enpneeds.com/public/images/profile_pic.png" alt="" multiple="multiple">
                                                    <video class="post_video hidden" id="temp_video" controls="" width="320" height="240"> <source src="" multiple="multiple"></video>

                                                    <!-- <iframe class="post_video hidden" id="temp_video" src=""
                                                            height="315" allowfullscreen></iframe> -->

                                                    <span style="vertical-align: top; color: coral; " class="hidden" id="trash" onclick="trash()"><i class="fa fa-trash trash_icon"></i> </span>

                                                    <progress id="progressBar" style="display: none" value="0" max="100"> %0
                                                    </progress>
                                                </div>
                                                <div class="attachments">
                                                    <ul>
                                                        
                                                        <li>
                                                            <div style="position: relative; overflow: hidden; display: inline-block;"> 
                                                            <i class="fa fa-image"></i>
                                                            
                                                                <input style="font-size: 100px; position: absolute; left: 0; top: 0; opacity: 0;" type="file" data-toggle="tooltip" title="" name="uploadfile" id="post_image" accept="image/*" data-original-title="Image">
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div style="position: relative; overflow: hidden; display: inline-block;">
                                                            <i class="fa fa-video-camera cursor-pointer"></i>
                                                            
                                                                <input style="font-size: 100px; position: absolute; left: 0; top: 0; opacity: 0;" type="file"  name="uploadvideo" id="post_video" data-toggle="tooltip" title="" accept="video/mp4,video/x-m4v,video/*" data-original-title="video">
                                                            </div>
                                                        </li>
                                                        <input type="hidden" id="hiddenurl" value="">
                                                        <input type="hidden" id="hiddentype" value="">
                                                        <!-- <li>
                                                            <i class="fa fa-camera"></i>
                                                            <label class="fileContainer">
                                                                <input type="file">
                                                            </label>
                                                        </li> -->
                                                        <li>
                                                            <button type="button" id="add_post" @click="sendPost($event)">Post</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </form>
                                        </div>
										
                                    </div>
                                    <p id="error_msg" style="color: red;display:none;margin-left: 82px;">Please Enter
                                        Post</p>
                                </div>
							
                        </div>
                        <div class="col-md-3">
                            <div class="card" style="box-shadow:none">
                                    
                                    <div class="card-body" style="height:170px">
										
                                        Advertisement
                                        
									</div>
								</div>
                        </div>
                    </div>
                    <section id="profile-info">
                        <div class="row">
                            <div class="col-lg-3 col-12">
                                
                                
                                <div class="card">
                                    <div class="card-header d-flex justify-content-between">
                                        <h4 align="center">People you may know</h4>
                                        
                                    </div>

                                    <div class="card-body">
                                        <div class="d-flex justify-content-start align-items-center mb-1" v-for="user in users.data" :key="user">
                                            <div class="avatar mr-50 ">
                                               <div v-for="img in profileImages.data" :key="img"> 
                                                    <span v-if="img.user_id==user.id">
                                                        <img :src="img.profileimg" alt="avtar img holder" style="height:35px;width:35px;object-fit:cover;">
                                                    </span>
                                                    
                                                </div>
                                                <!--<span v-if="img.profileimg==null">
                                                        <img src="../app-assets/dp.png" alt="defalut image" style="border-radius:50%;height:35px;width:35px;object-fit:cover;">
                                                    </span>-->
                                                <div v-for="img in pic" :key="img"> 
                                                    <span v-if="img==user.id">
                                                        <img src="../app-assets/dp.png" alt="avtar img holder" style="height:35px;width:35px;object-fit:cover;">
                                                    </span>
                                                    
                                                </div>
                                            </div>
                                            
                                            <div class="user-page-info">
                                                <h6 class="mb-0">{{user.first_name}} {{user.last_name}}</h6>
                                                <span class="font-small-2">6 Mutual Friends</span>
                                            </div>

                                            <button type="button" class="btn btn-primary btn-icon ml-auto"><i class="feather icon-user-plus"></i></button>
                                        </div>
                                        
                                        <button type="button" class="btn btn-primary w-100 mt-1"><i class="feather icon-plus mr-25"></i>Load More</button>
                                    </div>
                                </div>
								<div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Suggested Pages</h4>
                                    </div>
                                    <div class="card-body suggested-block">
                                        <div class="d-flex justify-content-start align-items-center mb-1" v-for="company in companies.data.data" :key="company">
                                            <div class="avatar mr-50">
                                                <img :src="company.image" alt="avtar img holder" style="height:35px;width:35px;object-fit:cover;">
                                            </div>
                                            <div class="user-page-info">
                                                <p>{{company.name}}</p>  
                                            </div>
                                            <div class="ml-auto">
                                                <i @click="followCompany(company.id)" onMouseOver="this.style.color='red'" 
                                                onMouseOut="this.style.color='grey'" class="feather icon-star"></i>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
								
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="card" v-for="post in posts.data.data" :key="post.user_id" :link="post" >
                                    <div class="card-body" >
                                        <div class="d-flex justify-content-start align-items-center mb-1">
                                            <div v-for="img in profileImages.data" :key="img">
                                                <div class="avatar mr-1"  v-if="img.user_id==post.user_id">
                                                    <img :src="img.profileimg" alt="avtar img holder" style="height:45px;width:45px;object-fit:cover;">
                                                </div>
                                            </div>
                                            <div class="user-page-info">
                                                <div v-for="user in users.data" :key="user">
                                                    <p class="mb-0"  v-if="post.user_id==user.id">{{user.first_name}} {{ user.last_name}}</p>
                                                </div>
                                                <p class="font-small-2" v-if="post.user_id==prof.user_id" style="margin:0px"> {{prof.designation}}</p>
                                                <span class="font-small-2">Published at: {{post.created_at}}</span>
                                                
                                            </div>
                                            
                                            <div class="ml-auto user-like" style="position:relative">
                                                <button class="btn btn-icon rounded-circle btn-xs" @click="editPost(post.id)">
                                                    <i class="fa fa-edit" style="color:black;background:white"></i>
                                                </button>    
                                                
                                                    <div :id="post.id" class="modal" style="position:absolute;width:15rem;height:15rem;margin-top:3rem;margin-left: -12rem;">
                                                        <form class="modal-content" style="padding:2rem:position:relative;border:solid 1px grey;border-radius: 0.6rem 0 0.6rem 0.6rem;">

                                                            <button @click="deletePost">Delete Post</button>

                                                            <button type="button" @click="closeButton(post.id)" class="close" style="top:0.2rem;right:1rem">&times;</button>
                                                             
                                                            <button @click="editPostButton(post.id +1)" class="btn btn-icon rounded-circle btn-xs" style="">Edit Post</button>
                                                            
                                                                <div :id="post.id + 1" class="modal">
                                                                    <form class="modal-content"  style="margin-top: 5%;width:40%; height:auto; Position:relative;">
                                                                        <span onclick="document.getElementById('id01').style.display='none'" style="right:1rem;top:1rem" class="close" title="Close Modal">&times;</span>
                                                                
                                                                        <div class="d-flex justify-content-start align-items-center mb-1">
                                                                            <div v-for="img in profileImages.data" :key="img">
                                                                                <div class="avatar mr-1"  v-if="img.user_id==post.user_id">
                                                                                    <img :src="img.profileimg" alt="avtar img holder" style="height:45px;width:45px;object-fit:cover;">
                                                                                </div>
                                                                            </div>
                                                                            <div class="user-page-info">
                                                                                <div v-for="user in users.data" :key="user">
                                                                                    <p class="mb-0"  v-if="post.user_id==user.id">{{user.first_name}} {{ user.last_name}}</p>
                                                                                </div>
                                                                                <p class="font-small-2" v-if="post.user_id==prof.user_id" style="margin:0px"> {{prof.designation}}</p>
                                                                                <span class="font-small-2">Published at: {{post.created_at}}</span>
                                                                                
                                                                                
                                                                            </div>
                                                                            
                                                                        </div>
                                                                        
                                                                        <textarea v-model="post.description" id="postDescription" name="description" style="border-bottom: 1px solid #eeeeee;margin-bottom: 1rem;"/>
                                                                        <div >
                                                                            <div v-if="post.Images.length==1">
                                                                                <div style="position:relative">
                                                                                    <img class="img-fluid card-img-top rounded-sm mb-2" style="" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                                                                    <button class="btn" id="picDelete" style=" position: absolute;top: 1rem;
                                                                                    right: 1rem;background-color: #555;color: white;font-size: 30px;padding: 5px 12px;border: none;cursor: pointer;border-radius: 50%;text-align: center;">&times;</button>
                                                
                                                                                </div>
                                                                            </div>
                                                        
                                            
                                                                            
                                                                        </div>
                                                                        <button type="button" @click="saveChanges(post.id)" class="btn btn-primary mr-1 mb-1 waves-effect waves-light">Save Changes</button>
                                                                    </form>
                                                                </div>
                                                            
                                                        </form>    
                                                    </div>
                                            </div>
                                         
                                        </div>
                                        <p>{{post.description}}</p> 
                                        <div >
                                            <div v-if="post.Images.length==1">
                                                <div style="">
                                                    <img class="img-fluid card-img-top rounded-sm mb-2" style="" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                        
                                                </div>
                                             </div>
                                    
                                        <div v-if="post.Images.length==2">
                                           <div style="height:300px; width:400px;">
                                               <img class="img-fluid card-img-top rounded-sm mb-2" style="height:290px;width:190px;float:left" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                                <img class="img-fluid card-img-top rounded-sm mb-2" style="height:290px;width:200px;" :src="post.Images[1].uploadfile" alt="avtar img holder">
                                            </div>
                                        </div>
                                         <div v-if="post.Images.length==3">
                                           <div style="height:300px; width:400px;">
                                               <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:190px;float:left" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                                <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:190px;" :src="post.Images[1].uploadfile" alt="avtar img holder">
                                                <img class="img-fluid card-img-top rounded-sm mb-2" style="height:140px;width:400px;" :src="post.Images[2].uploadfile" alt="avtar img holder">
                                            </div>
                                        </div>
                                        <div v-if="post.Images.length==4">
                                              <div style="height:300px; width:300px;">
                                                  <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;float:left" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                                  <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;float:left" :src="post.Images[1].uploadfile" alt="avtar img holder">
                                                   <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;" :src="post.Images[2].uploadfile" alt="avtar img holder">
                                                   <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;float:left" :src="post.Images[3].uploadfile" alt="avtar img holder">
                                               </div>
                                        </div>
                                        <div v-if="post.Images.length==5">
                                              <div style="height:300px; width:300px;">
                                                  <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;float:left" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                                  <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;float:left" :src="post.Images[1].uploadfile" alt="avtar img holder">
                                                   <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;" :src="post.Images[2].uploadfile" alt="avtar img holder">
                                                   <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;float:left" :src="post.Images[3].uploadfile" alt="avtar img holder">
                                                 <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;" :src="post.Images[4].uploadfile" alt="avtar img holder">
                                               </div>
                                        </div>
                                        
                                        
                                  
                        
                                <div v-if="post.videos.length==1">
                                     <div style="height:300px; width:400px; border-style:solid">
                                       <iframe :src="post.videos[0].uploadvideo" class="w-100 height-300"></iframe>
                                      </div>
                                   </div>
                                  
                                 
                                       
                                        </div>


                                    <!--<img class="img-fluid card-img-top rounded-sm mb-2" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                      <iframe :src="post.videos[0].uploadvideo" class="w-100 height-250"></iframe>-->
                                      
                                        <div class="d-flex justify-content-start align-items-center mb-1">
                                            <div class="d-flex align-items-center">
                                                <i onMouseOut="this.style.color='grey'" onMouseOver="this.style.color='blue'" 
                                                id="likeButton" @click="clickLike(post.id)" onclick="myFunction(this)" class="fa fa-thumbs-up font-medium-2 mr-50 cursor-pointer fa-3x" ></i>
                                                <span>{{post.likecount}}</span>
                                            </div>
                                            <div class="ml-2">
                                                <ul class="list-unstyled users-list m-0  d-flex align-items-center">
                                                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Trina Lynes" class="avatar pull-up">
                                                       
                                                    </li>
                                                    
                                                    <li class="d-inline-block pl-50">
                                                        <span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p class="ml-auto d-flex align-items-center">
                                                <i class="feather icon-message-square font-medium-2 mr-50"></i>
                                            </p>
                                        </div>
                                        <div v-for="comment in comments.data" :key="comment">
                                            <div class="d-flex justify-content-start align-items-center mb-1"  v-if="post.id == comment.post_id">
                                                
                                                    <div class="avatar mr-50" style="margin-block-end: auto;">
                                                        <span v-for="img in profileImages.data" :key="img">
                                                        <img v-if="comment.user_id==img.user_id" :src="img.profileimg" alt="Avatar" style="height:30px;width:30px;object-fit:cover;">
                                                        </span>
                                                    </div>
                                                
                                                    <div class="user-page-info" >
                                                    
                                                        <span v-for="user in users.data" :key="user">
                                                            <h6 class="mb-0" v-if="comment.user_id==user.id">{{user.first_name}} {{user.last_name}}</h6>
                                                        </span>
                                                        <span class="font-small-2">{{comment.comment}}</span>
                                                        <i class="fa fa-thumbs-up" aria-hidden="true" style="margin-left:10px;padding:0px 10px;cursor: pointer;"  @click="likeComment(comment.id,post.id)"></i>
                                                        <span>{{comment.commentlikecount}}</span>
                                                        
                                                          <span>
                                                            
                                                                <div v-for="reply in replies.data" :key="reply" style="background-color:#F6F2F1;margin:10px;border-radius:10px">
                                                                    <div v-if="post.id == reply.post_id">
                                                                        <div v-if="reply.comment_id == comment.id">
                                                                            <div class="avatar mr-50" style="float: left;">
                                                                                    <span v-for="img in profileImages.data" :key="img">
                                                                                        <img v-if="reply.user_id==img.user_id" :src="img.profileimg" alt="Avatar" style="height:25px;width:25px;object-fit:cover;">
                                                                                    </span>
                                                                            </div>
                                                                            <div class="user-page-info" style="margin-left:10px;padding: 5px 5px;" >
                                                                                <span v-for="user in users.data" :key="user">
                                                                                    <h6 class="mb-0" v-if="reply.user_id==user.id">{{user.first_name}} {{user.last_name}}</h6>
                                                                                </span>
                                                                            </div>
                                                                            <span class="font-small-2">{{reply.reply}}</span>   
                                                                            <i class="fa fa-thumbs-up" aria-hidden="true" style="margin-left:10px;padding:0px 10px;cursor: pointer;"  @click="clickOnReply(reply.id, comment.id)"></i>
                                                                            <span>{{reply.replylikecount}}</span>
                                                                        </div>
                                                                         </div>
                                                                    
                                                                </div>                                                                
                                                            </span>
                                                              <textarea style="margin-left:20px;display: inline-block;" class="form-control" :id="comment.id" rows="1" placeholder="Reply" name="reply" required="required"></textarea>
                                                            <button style="margin-left:20px;" type="submit" class="btn btn-sm btn-primary" @click="sendReply(comment.id, post.id)">Reply</button>
                                                        
                                                            
                                                    </div>
                                                
                                            </div>
                                        </div>
                                       
                                        <fieldset class="form-label-group mb-50">
                                            <textarea class="form-control" id="label-textarea" rows="2" placeholder="Add Comment" v-model="comment" required="required"></textarea>
                                            <label for="label-textarea">Add Comment</label>
                                        </fieldset>
                                        <button type="button" class="btn btn-sm btn-primary" @click="postComment(post.id)">Post Comment</button>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="">
                                   
                                    <div  style="text-align:-webkit-center">
												<wti />
									</div>
								</div>
                                
                                <div class="" style="margin-top: 20px;">
                                    
                                    <div class="" style="text-align:-webkit-center">
                                       <brent/>
                                    </div>
                                
								</div>
                                
								
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <button type="button" class="btn btn-primary block-element mb-1">Load More</button>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
        </div>
</template>

<script>

/* eslint-disable no-useless-escape */
import DataService from "../services/DataService"
import wti from '@/components/wti';
import brent from '@/components/brent';
import ModalDirection from "@/components/Modal";

export default {
    title: 'HomePage',
  name: "posts",
  components: {
        wti ,
        brent ,
        ModalDirection
        
    },
  data() {
      
       return {
           count: '',
           pic: [],
           seen: false,
           modalOpen: false,
           replies: [],
           comments: [],
           posts: [],
           users:[],
           profileImages:[],
           companies: [],
           comment: '',
           reply: '',
           like: '',
           user:'',
           company:'',
           description: '',
           post: {
                name: '',
                description: '',
                uploadfile: '',
                uploadvideo: ''
           },
           submitted: false,
                message:''
      };
  },
   async created() {
       DataService.getProfile()
        .then(response => {
          this.prof = response.data.data;
          
        })
        .catch(e => {
          console.log(e);
        });

       await DataService.getAllProfileImages()
      .then(response=>{
          this.profileImages = response.data;
          
      })
      await DataService.getAllCompany()
      .then(response=>{
          this.companies = response.data;
      })
      .catch(e => {
          console.log(e);
        });
       await DataService.getUsers()
      .then(response=>{
          this.users = response.data;
          
      })
      .catch(e => {
          console.log(e);
        });
        await DataService.getAll()
        .then(response => {
          this.posts = response.data;
          

          
        })
        .catch(e => {
          console.log(e);
        });
        await DataService.getAllComments()
                        .then(response => {
                        this.comments = response.data;
                        
                        })
                        .catch(e => {
                        console.log(e);
                        });
        await DataService.getAllReply()
            .then(response=>{
                this.replies = response.data;
            })
            .catch(e => {
                console.log(e);
            })
            
            
            
            for(var i=0;i<this.users.data.length;i++)
            {
                this.count=0;
                
                for(var j=0;j<this.profileImages.data.length;j++)
                {
                    
                   if(this.users.data[i].id==this.profileImages.data[j].user_id)
                   {
                       
                        this.count=1; 
                        
                   }
                    
                }
                if(this.count==0)
                {
                    this.pic.push(this.users.data[i].id);
                    
                } 
                       
            }
            
            
    },
     

           
  methods: {
      editPostButton(id){
          document.getElementById('id01').style.display='block'
      },
      closeButton(id){
          document.getElementById(id).style.display='none'
      },
      editPost(id){
          document.getElementById(id).style.display ='block'
      },
      deletePost(){
        DataService.deletePost(id)
          .then(response=>{
              alert("successfully deleted");
          })
          .catch(e=>{
              console.log(e);
              this.message="Invalid Credentials "
          });
      },
      followCompany(id){
          var fc=new FormData();
          fc.append("company_id", id);

          DataService.followCompany(fc)
          .then(response=>{
              alert("Like");
          })
          .catch(e=>{
              console.log(e);
              this.message="Invalid Credentials "
          }); 
      },
      saveChanges(id){
                event.preventDefault();
                const params = new URLSearchParams();
                params.append("description",document.getElementById("postDescription").value);
                
                DataService.postUpdate(id,params)
                    
                .catch(e=>{
                console.log(e);
                this.message="Invalid"
          });
      },
      openModal() {
            this.modalOpen = !this.modalOpen;
        },
     likeComment(comment_id,post_id){
         var lc=new FormData();
         lc.append("post_id", post_id);
         lc.append("comment_id", comment_id);

         console.log(lc);
         DataService.commentLike(lc)
         .then(response=>{
         this.message="Comment Successfuly Like"
         alert("Comment likes");
         })
          .catch(e=>{
              console.log(e);
              this.message="Invalid"
          });
     },
      clickOnReply(reply_id, comment_id){
          var cor = new FormData();
          cor.append("reply_id", reply_id);
          cor.append("comment_id",comment_id);

          console.log(cor);
          DataService.createReplyLike(cor)
          .then(response=>{
              console.log(response.data);
              this.message="Successfully Like"
              alert("Reply Like");
          })
          .catch(e=>{
              console.log(e);
              this.message="Invalid"
          });
      },
      clickLike(id){
          var lk=new FormData();
          lk.append("post_id", id);

          console.log(lk);
          DataService.createLike(lk)
          .then(response=>{
              console.log(response.data);
              this.message="Successfully saved !"
              alert("Like");
          })
          .catch(e=>{
              console.log(e);
              this.message="Invalid Credentials "
          });
      },
      
      sendReply(comment_id, id){
          event.preventDefault();
          var sr= new FormData();
          sr.append("comment_id", comment_id);
          sr.append("post_id", id);
          this.reply=document.getElementById(comment_id).value;
          sr.append("reply", this.reply);
          
          DataService.createReply(sr)
          .then(response=>{
                        //this.post.id=response.data.id;
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Reply send");
                        

                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });

      },
      postComment(id){
          
          var fd = new FormData();
          fd.append("post_id", id);
          fd.append("comment",this.comment);

          console.log(fd);
            console.log(this.comment);
          DataService.createComments(fd)
          .then(response=>{
                        //this.post.id=response.data.id;
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Comment Added");
                        

                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });

                    

      },

      
      sendPost(event){
                event.preventDefault();
                var formData = new FormData();
                formData.append("description" ,this.post.description);
                formData.append("uploadfile[0]", document.getElementById("post_image").files[0]);
                formData.append("uploadvideo[0]", document.getElementById("post_video").files[0]);

                console.log(formData);
                
                DataService.create(formData)
                    .then(response=>{
                        this.post.id=response.data.id;
                        console.log(response.data);
                        this.message="Successfully saved !"
                        alert("Detail Added");
                        location.replace("/timeline");
                    
                    })
                    .catch(e=>{
                        console.log(e);
                        this.message="Invalid Credentials "
                    });
                    this.submitted=true;
                    },         
                },
}
</script>
<style>

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.show {display: block;}

</style>
