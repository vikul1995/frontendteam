<template>
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-9 col-12 mb-2">
                    <div class="row breadcrumbs-top">
                        <div class="col-12">
                            <h2 class="content-header-title float-left mb-0">Profile</h2>
                            <div class="breadcrumb-wrapper col-12">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/timeline">Home</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a>
                                    </li>
                                    <li class="breadcrumb-item active">Profile
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                    <div class="form-group breadcrum-right">
                        <div class="dropdown">
                            <button class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-settings"></i></button>
                            <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Chat</a><a class="dropdown-item" href="#">Email</a><a class="dropdown-item" href="#">Calendar</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-body">
                <div id="user-profile">
                    <CoverPhoto />
                    <section id="profile-info">
                        <div class="row">
                            <div class="col-lg-3 col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>About</h4>
                                        <i class="feather icon-more-horizontal cursor-pointer"></i>
                                    </div>
                                    <div class="card-body">
                                        <div class="mt-1">
                                            <h6 class="mb-0">DOB:</h6>
                                            <p>{{user.dob}}</p>
                                        </div>
                                        <div class="mt-1">
                                            <h6 class="mb-0">Gender:</h6>
                                            <p>{{user.gender}}</p>
                                        </div>
                                        <div class="mt-1">
                                            <h6 class="mb-0">Email:</h6>
                                            <p>{{user.email}}</p>
                                        </div>
                                        
                                        <div class="mt-1">
                                            <button type="button" class="btn btn-sm btn-icon btn-primary mr-25 p-25"><i class="feather icon-facebook"></i></button>
                                            <button type="button" class="btn btn-sm btn-icon btn-primary mr-25 p-25"><i class="feather icon-twitter"></i></button>
                                            <button type="button" class="btn btn-sm btn-icon btn-primary p-25"><i class="feather icon-instagram"></i></button>
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
                                                

                                                <button onclick="document.getElementById('id01').style.display='block'" class="btn btn-icon rounded-circle btn-xs" style=""><i class="fa fa-edit"></i></button>

                                                <div id="id01" class="modal">
                                                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                                                    <form>
                                                        
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
                                                <i  id="likeButton" @click="clickLike(post.id)" onclick="myFunction(this)" class="fa fa-thumbs-up font-medium-2 mr-50 cursor-pointer fa-3x" ></i>
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
                                                              <textarea style="margin-left:20px;    display: inline-block;" class="form-control" id="label-textarea"  rows="1" placeholder="Reply" v-model="reply"></textarea>
                                                            <button style="margin-left:20px;" type="button" class="btn btn-sm btn-primary" @click="sendReply(comment.id, post.id)">Reply</button>
                                                        
                                                            
                                                    </div>
                                                
                                            </div>
                                        </div>
                                       
                                        <fieldset class="form-label-group mb-50">
                                            <textarea class="form-control" id="label-textarea" rows="2"  placeholder="Add Comment" v-model="comment"></textarea>
                                            <label for="label-textarea">Add Comment</label>
                                        </fieldset>
                                        <button type="button" class="btn btn-sm btn-primary" @click="postComment(post.id)">Post Comment</button>
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
import CoverPhoto from "../components/CoverPhoto"
export default {
  name: "posts",
  components: {
        CoverPhoto
        
    },
  data() {
      
       return {
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
          
      })
      DataService.getAllCompany()
      .then(response=>{
          this.companies = response.data;
          
      })
      .catch(e => {
          console.log(e);
        });
      DataService.getUsers()
      .then(response=>{
          this.users = response.data;
          
      })
      .catch(e => {
          console.log(e);
        });
       DataService.getAll()
        .then(response => {
          this.posts = response.data;
          

          
        })
        .catch(e => {
          console.log(e);
        });
        DataService.getAllComments()
                        .then(response => {
                        this.comments = response.data;
                        
                        })
                        .catch(e => {
                        console.log(e);
                        });
        DataService.getAllReply()
            .then(response=>{
                this.replies = response.data;
            })
            .catch(e => {
                console.log(e);
            })
            console.log("pic");
            for(var i=0;i<this.user.data.length;i++)
            {
                var count=0;
                for(var j=0;this.profileimg.data.length;j++)
                {
                   if(this.user.data.id[i]==this.profileimg.data.user_id[j])
                   {
                        count=1;
                   }
                    
                }
                if(count=0)
                {
                    this.pic=this.user.data.id[i];
                }
                    
            }
            console.log("pic");
            console.log(this.pic);
    },
     

           
  methods: {
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
