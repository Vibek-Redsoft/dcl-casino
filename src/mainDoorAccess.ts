import { Dialog, NPC } from "@dcl/npc-scene-utils";

//Defining a Security Guard at Club Entrance.................
export const clubGuard = new NPC(
  {position:new Vector3(1.47,0.88,26.53), rotation: new Quaternion(0, 180, 0, 1),},
  'models/alice.glb',
  ()=>{
    clubGuard.talk(guardCheckPoint,0);
    clubGuard.getComponent(Animator).addClip(new AnimationState('hello',{looping:false}))
    clubGuard.getComponent(Animator).addClip(new AnimationState('talk',{looping:true}))
    clubGuard.getComponent(Animator).getClip('hello').play()
    clubGuard.getComponent(Animator).getClip('talk').play()
  },
  {
    faceUser:true,
    reactDistance:3,
    turningSpeed:4,
  }
)
//Guard's Conversations with the Player/User/Customer.......
export const guardCheckPoint: Dialog[] = [
  {
    text: "Hey You! <b>CatHouse</b> is not for anyone under the age of 18......",
    isEndOfDialog: true,
  },
  {
    text:'<b>Welcome To CatHouse</b>',
    isEndOfDialog:true,
    name:'welcome',
  },
  {
    text: 'Sorry Restricted Area for Under 18',
    isEndOfDialog:true,
    name: 'under 18',
  },
  {
    text:'Thanks For Visiting Us. See You Soon!',
    isEndOfDialog:true,
    name:'goodbye',
  },
  {
    text:'Mana Pay Required',
    isEndOfDialog:true,
    name:'mana',
  }
];