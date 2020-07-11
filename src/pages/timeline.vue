<template>
        <div class="app-content content">
        <div class="content-wrapper">
            
            <div class="content-body">
                <div id="user-profile">
                    <div class="row">
                        <div class="col-9">
                            
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
                                                            <i class="fa fa-video-camera"></i>
                                                            
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
                        <div class="col-3">
                            <div class="card">
                                    
                                    <div class="card-body">
										
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
                                        <h4>People you may know</h4>
                                        <i class="feather icon-more-horizontal cursor-pointer"></i>
                                    </div>
                                    <div class="card-body">
                                        <div class="d-flex justify-content-start align-items-center mb-1" v-for="user in users.data" :key="user">
                                            <div class="avatar mr-50 " v-for="img in profileImages.data" :key="img">
                                                <div v-if="img.user_id==user.id">
                                                    <img :src="img.profileimg" alt="avtar img holder" style="height:35px;width:35px;object-fit:cover;">
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
                                                <img :src="company.image" alt="avtar img holder" height="35" width="35">
                                            </div>
                                            <div class="user-page-info">
                                                <p>{{company.name}}</p>
                                                
                                            </div>
                                            <div class="ml-auto"><i class="feather icon-star"></i></div>
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
                                                <p class="mb-0"> {{post.designation}}</p>
                                                <span class="font-small-2">Published at: {{post.created_at}}</span>
                                            </div>
                                            
                                            <div class="ml-auto user-like">
                                                <button id="show-modal"  style="background-color:white;color:black;">
                                                <i class="fa fa-edit" style="font-size:20px" v-on:click="seen =! seen"></i></button>
                                                <div id="myDropdown" v-if="seen" class="dropdown-content">
                                                    <a href="#home">Home</a>
                                                    <a href="#about">About</a>
                                                    <a href="#contact">Contact</a>
                                                </div>
                                            </div>
                                         
                                        </div>
                                        <p>{{post.description}}</p> 
                                        <div >
                                            <div v-if="post.Images.length==1">
                                            <div style="height:300px; width:100%; border-style:solid">
                                                <img class="img-fluid card-img-top rounded-sm mb-2" style="height:300px;width:540px;float:left" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                        
                                                </div>
                                        </div>
                                    
                                        <div v-if="post.Images.length==2">
                                           <div style="height:300px; width:400px; border-style:solid">
                                               <img class="img-fluid card-img-top rounded-sm mb-2" style="height:290px;width:190px;float:left" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                                <img class="img-fluid card-img-top rounded-sm mb-2" style="height:290px;width:200px;" :src="post.Images[1].uploadfile" alt="avtar img holder">
                                            </div>
                                        </div>
                                         <div v-if="post.Images.length==3">
                                           <div style="height:300px; width:400px; border-style:solid">
                                               <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:190px;float:left" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                                <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:190px;" :src="post.Images[1].uploadfile" alt="avtar img holder">
                                                <img class="img-fluid card-img-top rounded-sm mb-2" style="height:140px;width:400px;" :src="post.Images[2].uploadfile" alt="avtar img holder">
                                            </div>
                                        </div>
                                        <div v-if="post.Images.length==4">
                                              <div style="height:300px; width:300px; border-style:solid">
                                                  <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;float:left" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                                  <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;float:left" :src="post.Images[1].uploadfile" alt="avtar img holder">
                                                   <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;" :src="post.Images[2].uploadfile" alt="avtar img holder">
                                                   <img class="img-fluid card-img-top rounded-sm mb-2" style="height:150px;width:150px;float:left" :src="post.Images[3].uploadfile" alt="avtar img holder">
                                               </div>
                                        </div>
                                        <div v-if="post.Images.length==5">
                                              <div style="height:300px; width:300px; border-style:solid">
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
                                  
                                 <div  style="height:40px; width:400px;">
                                 </div>
                                       
                                        </div>


                                    <!--<img class="img-fluid card-img-top rounded-sm mb-2" :src="post.Images[0].uploadfile" alt="avtar img holder">
                                      <iframe :src="post.videos[0].uploadvideo" class="w-100 height-250"></iframe>-->
                                      
                                        <div class="d-flex justify-content-start align-items-center mb-1">
                                            <div class="d-flex align-items-center">
                                                <i  id="likeButton" @click="clickLike(post.id)" onclick="myFunction(this)" class="fa fa-thumbs-up font-medium-2 mr-50" ></i>
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
                                        <div class="d-flex justify-content-start align-items-center mb-1" v-for="comment in comments.data" :key="comment">
                                            <div v-if="post.id == comment.post_id">
                                                <div v-for="img in profileImages.data" :key="img">
                                                    <div class="avatar mr-50" v-if="comment.user_id==img.user_id">
                                                        <img :src="img.profileimg" alt="Avatar" style="height:25px;width:25px;object-fit:cover;">
                                                    </div>
                                                </div>
                                                <div class="user-page-info" >
                                                    <div v-for="user in users.data" :key="user">
                                                        <div v-if="comment.user_id==user.id">
                                                            <h6 class="mb-0">{{user.first_name}} {{user.last_name}}</h6>
                                                        </div>
                                                    </div>
                                                        <span class="font-small-2">{{comment.comment}}</span>
                                                            
                                                            <div v-for="reply in replies.data" :key="reply" style="margin-left:10px;">
                                                                <div v-if="post.id == reply.post_id">
                                                                    <div v-if="reply.comment_id == comment.id">
                                                                        <span class="font-small-2">{{reply.reply}}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                
                                                <div class="ml-auto cursor-pointer">
                                                    <div>
                                                        <i class="feather icon-heart mr-50" @click="clickOnReply(comment.id,reply.id)"></i><span>{{reply.replylikecount}}</span>
                                                        <i :id="comment.id" class="feather icon-message-square" v-on:click="seen =! seen">
                                                            <textarea v-if="seen" class="form-control" id="label-textarea"  rows="2" placeholder="Reply" v-model="reply"></textarea>
                                                            <button v-if="seen" type="button" class="btn btn-sm btn-primary" @click="sendReply(comment.id, post.id)">Reply</button>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <fieldset class="form-label-group mb-50">
                                            <textarea class="form-control" id="label-textarea" rows="3"  placeholder="Add Comment" v-model="comment"></textarea>
                                            <label for="label-textarea">Add Comment</label>
                                        </fieldset>
                                        <button type="button" class="btn btn-sm btn-primary" @click="postComment(post.id)">Post Comment</button>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div class="col-lg-3 col-12">
                                <div class="">
                                   
                                    <div>
												<wti />
									</div>
								</div>
                                
                                <div class="" style="margin-top: 20px;">
                                    
                                    <div class="">
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

export default {
    title: 'HomePage',
  name: "posts",
  components: {
        wti ,
        brent 
        
    },
  data() {
      
       return {
           seen: false,
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
  created() {
      DataService.getAllProfileImages()
      .then(response=>{
          this.profileImages = response.data;
          console.log(response.data);
      })
      DataService.getAllCompany()
      .then(response=>{
          this.companies = response.data;
          console.log(response.data);
      })
      .catch(e => {
          console.log(e);
        });
      DataService.getUsers()
      .then(response=>{
          this.users = response.data;
          console.log(response.data);
      })
      .catch(e => {
          console.log(e);
        });
       DataService.getAll()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        DataService.getAllComments()
                        .then(response => {
                        this.comments = response.data;
                        console.log(response.data);
                        console.log(this.comment);
                        console.log("get comments");
                        
                        })
                        .catch(e => {
                        console.log(e);
                        });
        DataService.getAllReply()
            .then(response=>{
                this.replies = response.data;
                console.log(response.data);
                console.log(this.replies);
            })
            .catch(e => {
                console.log(e);
            })
    },
     

           
  methods: {
      
     
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
          var sr= new FormData();
          sr.append("comment_id", comment_id);
          sr.append("post_id", id);
          sr.append("reply", this.reply);

          console.log(sr);
          console.log("reply");
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
