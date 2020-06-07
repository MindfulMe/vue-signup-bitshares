<template>
    <div class="w-100 h-100 d-flex flex-column">
        
        <div 
            id="logos"
            class="d-block text-center start"
        >
            <img 
                src="img/logo.png" 
                class="d-inline-block img-fluid bts"
            >
            <h2 class="d-inline-block mb-3 txtAt">at</h2>
            <img 
                src="img/dlogo.png" 
                class="d-inline-block img-fluid mx-auto decent"
            >
        </div>
        
        <div class="d-flex h-50 justify-content-center">
            <div class="content">
                <transition
                    name="custom-classes-transition"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut"
                >
                    <h3 
                        v-if="start" 
                        class="text-center" 
                        style="animation-duration: 0.8s"
                    >Welcome to BitShares</h3>
                </transition>
                <transition
                    name="custom-classes-transition"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut"
                >
                    <div 
                        v-if="second" 
                        style="animation-duration: 0.8s" 
                    >
                        <p class="text-center px-2 mx-auto mb-3 introTxt" v-if="secondTxt">
                            <strong>Welcome Decentralized attendees!</strong><br/>We are offering Premium BitShares account names (i.e. names that do not include digits or special characters) <strong>FREE</strong> for the duration of the event (14-16 November).
                        </p>
                        <h3 
                            class="mb-4 text-center"
                        >Let's create your account!</h3>
                    </div>
                </transition>
                <transition
                    name="custom-classes-transition"
                    enter-active-class="slideInUp"
                >
                    <div 
                        v-if="second" 
                    >
                        <div class="row">
                            <div class="col-2" />
                            <div class="col-8">
                                <b-form-input 
                                    id="account"
                                    v-model="accountname" 
                                    :disabled="namedisabled" 
                                    style="animation-duration: 0.8s" 
                                    type="text"
                                    placeholder="Choose your account name"
                                    class="text-center w-100" 
                                    @input="toggleButton"
                                />
                            </div>                        
                            <div class="col-2 px-0 pt-2">                      
                                <font-awesome-icon 
                                    v-if="success" 
                                    icon="check" 
                                    class="green"
                                />
                                <font-awesome-icon 
                                    v-if="error" 
                                    icon="times" 
                                    class="red"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1" />
                            <div class="col-10 text-center">
                                <div class="mb-3"><span class="d-block error red">{{ errormsg }}</span></div>
                            </div>
                            <div class="col-1" />
                        </div>
                        <div class="row">
                            <div class="col-1" />
                            <div class="col-10 text-center">
                                <b-button 
                                    v-if="showcheck" 
                                    style="animation.delay: 0.9s;animation-duration: 0.4s" 
                                    variant="bitshares" 
                                    @click="checkName(accountname)"
                                >Check if name is available</b-button>
                                <b-button 
                                    v-if="shownext" 
                                    style="animation.delay: 0.4s;animation-duration: 0.4s" 
                                    variant="bitshares" 
                                    @click="gotoKeys()"
                                >Next</b-button>
                            </div>
                            <div class="col-1" />
                        </div>
                    </div>
                </transition>
                <transition
                    name="custom-classes-transition"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut"
                >
                    <div
                        v-if="keys"
                    >
                        <div class="row checkbox mb-2">
                            <div class="col-1">
                            </div>
                            <div class="col-7 p-0 text-center">
                                Password:<br/>
                                <b-form-textarea
                                    id="password"
                                    v-model="password"                                    
                                    type="text"
                                    class="text-left mt-2"
                                    cols="16"
                                    rows="2"
                                /></b-form-textarea>
                            </div>                            
                            <div class="col-3">
                                <br/>
                                  <b-button 
                                    variant="bitshares" 
                                    class="mt-2"
                                    @click="copyPass()"
                                >COPY</b-button>
                                </div>
                            <div class="col-1">
                            </div>
                        </div>
                        <div class="row checkbox mb-2">
                            <div class="col-1">
                            </div>
                            <div class="col-10 p-0">
                                <b-form-input 
                                    id="confirmpassword"
                                    v-model="confirmpassword"
                                    placeholder="Please confirm your password"                                    
                                    type="text"                                    
                                    class="text-center w-100"
                                />
                            </div>
                            <div class="col-1">
                            </div>
                        </div>
                        <div class="row checkbox mb-2">
                            <div class="col-1">
                            </div>
                            <div class="col-1">
                                <b-checkbox v-model="check1"/>
                            </div>
                            <div class="col-9">
                                I understand that I will lose access to my funds if I lose my password
                            </div>
                            <div class="col-1">
                            </div>
                        </div>
                        <div class="row checkbox mb-2">
                            <div class="col-1">
                            </div>
                            <div class="col-1">
                                <b-checkbox v-model="check2"/>
                            </div>
                            <div class="col-9">
                                I understand that no one can recover my password if I lose or forget it
                            </div>
                            <div class="col-1">
                            </div>
                        </div>
                        <div class="row checkbox mb-2">
                            <div class="col-1">
                            </div>
                            <div class="col-1">
                                <b-checkbox v-model="check3"/>
                            </div>
                            <div class="col-9">
                                I have written down or otherwise stored my password
                            </div>
                            <div class="col-1">
                            </div>
                        </div>
                    </div>
                </transition>
                <transition
                    name="custom-classes-transition"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut"
                >
                    <div
                        v-if="allChecks"
                    >
                        <div class="row mt-3">
                            <div class="col-1"></div>
                            <div class="col-10 text-center">
                                     <b-button 
                                    variant="bitshares"
                                    v-if="unclicked"
                                    @click="createAccount()"
                                >Create Account</b-button>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                </transition>                
                <transition
                    name="custom-classes-transition"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut"
                >
                    <div 
                        v-if="final" 
                        style="animation-duration: 0.8s;animation.delay: 0.9s" 
                    >
                        <p class="text-center px-2 mx-auto mt-4 mb-4">
                            <strong>Congratulations!</strong><br/><br/>
                            You have succesfully created your account <strong>{{ this.accountname}}</strong> and can now enjoy the speed and features of the BitShares blockchain.<br/>
                            You may download our reference wallet app (available for Windows/OS X/Linux) <a href="https://github.com/bitshares/bitshares-ui/releases">here</a> or use our web wallet interface at <a href="https://wallet.bitshares.org">https://wallet.bitshares.org</a>

                        </p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

    import BitShares from "./lib/BitShares";
    import {PrivateKey} from "bitsharesjs";
    import "bootstrap/dist/css/bootstrap.css";
    import "bootstrap-vue/dist/bootstrap-vue.css";
    import "vue2-animate/dist/vue2-animate.min.css";
    import "./styles.css";
    import {ec as EC} from "elliptic";
    import wif from "wif";
    import rp from "request-promise";

    var ec = new EC('curve25519');

    export default {
        name: "Home",
        components: {},
        data: function() {
            return {
                start: false,
                second: false,
                secondTxt: true,
                api: null,
                accountname: "",
                showcheck: false,
                shownext: false,
                errormsg: " ",
                error: false,
                success: false,
                namedisabled:false,
                keys:false,
                check1:false,
                check2:false,
                check3:false,
                final:false,
                password:'',
                confirmpassword:'',
                unclicked:true
            };
        },
        computed: {
            allChecks: function () {
                return (this.check1 && this.check2 && this.check3 && this.password==this.confirmpassword && !this.final);
            }
        },
        async mounted() {
            this.start = true;
            setTimeout(() => {
                this.step2();
            }, 3000);
            this.bitshares = new BitShares("wss://eu.nodes.bitshares.ws");
            this.api = await this.bitshares.connect();
            console.log(this.api);
        },
        methods: {
            step2: function() {
                this.start = false;
                setTimeout(() => {
                    this.second = true;
                }, 810);
            },
            toggleButton() {
                if (this.accountname.trim() == "") {
                    this.showcheck = false;
                    this.shownext = false;
                    this.success = false;
                    this.error = false;
                    this.errormsg = " ";
                } else {
                    this.success = false;
                    this.error = false;
                    this.showcheck = true;
                    this.shownext = false;
                    this.errormsg = " ";
                }
            },
            generatePass: function() {
                let key = ec.genKeyPair();
                return key.getPrivate('hex');
            },
            checkName: async function(name) {
                try {
                    this.api
                        .db_api()
                        .exec("get_accounts", [[name]])
                        .then(
                            res => {
                                console.log("Exists");
                                this.error = true;
                                this.success = false;
                                this.errormsg = "This account name is taken already.";
                            },
                            err => {
                                this.error = false;
                                this.success = true;
                                this.showcheck = false;
                                this.shownext = true;
                                console.log("Does not exist");
                            }
                    );
                } catch (e) {
                    console.log(e);
                }
            },
            gotoKeys: function() {
                document.getElementById('logos').classList.add('end');
                let pass=this.generatePass();
                let bytes=Buffer.from(pass,'hex');
                this.password='P'+wif.encode(128,bytes,false);
                console.log(this.password);
                this.shownext=false;
                this.secondTxt=false;
                this.namedisabled=true;
                this.keys=true;
            },
            copyPass: function() {
                let passfield=document.getElementById('password');
                passfield.select();
                document.execCommand('copy');
            },
            createAccount: function() {
                if (this.allChecks) {
                    this.unclicked=false;
                    let aseed = this.accountname.trim() + 'active'+ this.password;
                    let oseed = this.accountname.trim() + 'owner'+ this.password;
                    let mseed = this.accountname.trim() + 'memo'+ this.password;
                    let apriv = PrivateKey.fromSeed(aseed);
                    let opriv = PrivateKey.fromSeed(oseed);
                    let mpriv = PrivateKey.fromSeed(mseed);
                    let active= apriv.toPublicKey().toPublicKeyString('BTS');
                    let owner= opriv.toPublicKey().toPublicKeyString('BTS');
                    let memo= mpriv.toPublicKey().toPublicKeyString('BTS');
                    rp({
                        method: 'POST',
                        uri: 'https://faucet.bitshares.eu/api/v1/accounts',
                        body: {
                            "account":{
                                "name":this.accountname,
                                "owner_key":owner,
                                "active_key":active,
                                "memo_key":memo,
                            }
                        },
                        json: true // Automatically stringifies the body to JSON
                    }).then((response) =>{
                        if (response.error) {
                            alert(response.error.base);
                        }else{
                            this.final=true;
                            this.second=false;
                            this.keys=false;
                        }
                    }).catch((error) => {
                        alert(error);
                    });

                }
            }
        }
    };
</script>

<style lang="less">
.red {
  color: rgb(240, 20, 20);
}
.green {
  color: rgb(20, 240, 20);
}
.error {
  font-size: 13px;
  font-style: italic;
  line-height: 17px;
  height: 17px;
}

.btn {
  border: 0;
  padding: 10px 15px;
  font-weight: 500;
  outline: 0 none;
  border: 0;
  box-shadow: none;
}

.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: 0 none;
  border: 0;
  box-shadow: none;
}

.btn-bitshares {
  background: #00a9e0;
  color: #ffffff;
}

.btn-bitshares:hover,
.btn-bitshares:focus,
.btn-bitshares:active,
.btn-bitshares.active,
.open > .dropdown-toggle.btn-bitshares {
  background: #00a9e0;
  outline: 0 none;
  border: 0;
  box-shadow: none;
}

.btn-bitshares:active,
.btn-bitshares.active {
  background: #00587c;
  outline: 0 none;
  border: 0;
  box-shadow: none;
}
.content {
    width:100%;
}
.start {
    height:50%;
    padding:1.5rem 2.5rem;
    
    transition: 0.4s all;
    .bts {
        width:100%;
        transition: 0.4s all;
    }
    .txtAt {
        transition: 0.4s all;
        width:100%;
    }
    .decent {
        width:100%;
        transition: 0.4s all;
    }
}
#account {
    font-size:14px;
}
.end {
    height:auto;
    padding:0.5rem;
    .bts {
        width:39%;
        display:inline-block !important;
    }
    .txtAt {
        font-size:20px;
        display:inline-block !important;
        width:20%;
    }
    .decent {
        width:39%;
        display:inline-block !important;
    }
}
.checkbox {
    font-size:13px;
}
#password {
    font-size:12px;
    
    padding:0.2rem;
}
#confirmpassword {
    font-size:12px;
    
    padding:0.2rem;
}
.introTxt {
    font-size:15px;
    line-height:1.3;
}
</style>