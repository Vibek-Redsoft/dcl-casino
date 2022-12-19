import * as utils from "@dcl/ecs-scene-utils";
import { isPreviewMode } from "@decentraland/EnvironmentAPI";
import { triggerEmote, PredefinedEmote } from "@decentraland/RestrictedActions";

//// List of dance areas - add here the locations where you want dancing to happen
export const danceAreas: any = [
  //Ground Floor Dance platform
  {
    transform: {
      position: new Vector3(40.5, 0.1, 23),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(8.5, 0.2, 12),
    },
    type: "all",
  },
  //Top Floor Dance platform
  {
    transform: {
      position: new Vector3(33.74, 37.06, 23.85),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(8.5, 0.2, 6),
    },
    type: "all",
  },
];

// Second Floor Dance Area
export const secondFloordanceAreas: any = [
  //1st Floor Right Dance platform
  {
    transform: {
      position: new Vector3(10.02, 11.3, 30),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(4, 0.2, 4.5),
    },
    type: "all",
  },
  //1st Floor Left1 Dance platform
  {
    transform: {
      position: new Vector3(10.02, 11.3, 18),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(4, 0.5, 3),
    },
    type: "all",
  },
  //1st Floor DJ Dance platform
  {
    transform: {
      position: new Vector3(41, 11.3, 24),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(4, 0.5, 4.5),
    },
    type: "all",
  },
  //1st Floor centre Dance platform
  {
    transform: {
      position: new Vector3(29.11, 11.6, 24.5),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(4, 0.5, 4),
    },
    type: "all",
  },
  {
    transform: {
      position: new Vector3(33.11, 11.6, 24.5),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(6, 0.5, 4),
    },
    type: "all",
  },
  {
    transform: {
      position: new Vector3(25.11, 11.6, 24.5),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(4, 0.5, 4),
    },
    type: "all",
  },
  {
    transform: {
      position: new Vector3(21.11, 11.6, 24.5),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(4, 0.5, 4),
    },
    type: "all",
  },
  {
    transform: {
      position: new Vector3(17.11, 11.6, 24.5),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(6, 0.5, 4),
    },
    type: "all",
  },
];

export const thirdFloordanceAreas: any = [
  //2nd Floor Right Dance platform
  {
    transform: {
      position: new Vector3(1.86, 18, 11.85),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(4, 0.5, 3),
    },
    type: "all",
  },
    //2nd Floor Left Dance platform
    {
      transform: {
      position: new Vector3(14,18,12),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(4, 0.2, 3)
      },
      type: "all",
    },
    {
      transform: {
      position: new Vector3(12.27,11.99,29.61),
      rotation: new Quaternion(0, 1, 0, 1),
      scale: new Vector3(4, 0.2, 3)
      },
      type: "all",
    }
];

////// DEBUG FLAG - Set to true to view all dance areas
const DEBUG_FLAG = false;

///// This system acts on the danceAreas defined above

export class DanceSystem {
  length = 11;
  timer = 2;
  routine: any;
  danceFunction: () => void = () => {
    //   log('pointer Up')
    this.dance();
  };

  routines: PredefinedEmote[] = [
    PredefinedEmote.ROBOT,
    PredefinedEmote.TIK,
    PredefinedEmote.TEKTONIK,
    PredefinedEmote.HAMMER,
    PredefinedEmote.HEAD_EXPLODDE,
    PredefinedEmote.HANDS_AIR,
    PredefinedEmote.DISCO,
    PredefinedEmote.DAB,
  ];

  constructor(routine: PredefinedEmote) {
    this.routine = routine;
  }

  update(dt: number) {
    if (this.timer > 0) {
      this.timer -= dt;
    } else {
      this.dance();
    }
  }
  dance() {
    this.timer = this.length;
    if (this.routine === "all") {
      const rand = Math.floor(Math.random() * (this.routine.length - 0) + 0);
      void triggerEmote({ predefined: this.routines[rand] });
    } else {
      void triggerEmote({ predefined: this.routine });
    }
  }
  addEvents() {
    Input.instance.subscribe(
      "BUTTON_UP",
      ActionButton.FORWARD,
      false,
      this.danceFunction
    );

    Input.instance.subscribe(
      "BUTTON_UP",
      ActionButton.BACKWARD,
      false,
      this.danceFunction
    );

    Input.instance.subscribe(
      "BUTTON_UP",
      ActionButton.RIGHT,
      false,
      this.danceFunction
    );

    Input.instance.subscribe(
      "BUTTON_UP",
      ActionButton.LEFT,
      false,
      this.danceFunction
    );
  }
  removeEvents() {
    Input.instance.unsubscribe(
      "BUTTON_UP",
      ActionButton.FORWARD,
      this.danceFunction
    );

    Input.instance.unsubscribe(
      "BUTTON_UP",
      ActionButton.BACKWARD,
      this.danceFunction
    );

    Input.instance.unsubscribe(
      "BUTTON_UP",
      ActionButton.RIGHT,
      this.danceFunction
    );

    Input.instance.unsubscribe(
      "BUTTON_UP",
      ActionButton.LEFT,
      this.danceFunction
    );
  }
}

export type Props = {
  enableSecondFloorDance?: boolean;
  enableThirdFloorDance?: boolean;
}

export default class DancingSystem implements IScript<Props> {

  finalDanceArea;

  constructor(){
    this.finalDanceArea = danceAreas;
  }

  init() {}

  spawn(host: Entity, props?: Props, channel?: IChannel) {

    if(props.enableSecondFloorDance){
      Array.prototype.push.apply(this.finalDanceArea,secondFloordanceAreas);
    }

    if(!props.enableSecondFloorDance){
      this.finalDanceArea = danceAreas
    }

    if(props.enableThirdFloorDance){
      Array.prototype.push.apply(this.finalDanceArea,thirdFloordanceAreas);
    }else{
      this.finalDanceArea = danceAreas
    }

    for (const i in this.finalDanceArea) {
      const area = new Entity("dance-" + i);
      area.addComponent(new Transform(this.finalDanceArea[i].transform));
    
      void executeTask(async () => {
        if (DEBUG_FLAG && (await isPreviewMode())) {
          area.addComponent(new BoxShape());
          area.getComponent(BoxShape).withCollisions = false;
        }
      });
    
      engine.addEntity(area);
      const dsystem = new DanceSystem(this.finalDanceArea[i].type);
    
      area.addComponent(
        new utils.TriggerComponent(
          new utils.TriggerBoxShape(
            new Vector3(
              area.getComponent(Transform).scale.x,
              area.getComponent(Transform).scale.y,
              area.getComponent(Transform).scale.z
            ),
            new Vector3(0, 2.5, 0)
          ),
          {
            enableDebug: false,
            onCameraEnter: () => {
              engine.addSystem(dsystem);
              dsystem.addEvents();
            },
            onCameraExit: () => {
              dsystem.removeEvents();
              engine.removeSystem(dsystem);
            },
          }
        )
      );
    }
  }
  
}

// let finalDanceArea = [];
// if(enableSecondFloorDance){
//   danceAreas.push(secondFloordanceAreas)
// }
// log(">>>>>>>>>>",enableSecondFloorDance,danceAreas,danceAreas.length)

// for (const i in danceAreas) {
//   const area = new Entity("dance-" + i);
//   area.addComponent(new Transform(danceAreas[i].transform));

//   void executeTask(async () => {
//     if (DEBUG_FLAG && (await isPreviewMode())) {
//       area.addComponent(new BoxShape());
//       area.getComponent(BoxShape).withCollisions = false;
//     }
//   });

//   engine.addEntity(area);
//   const dsystem = new DanceSystem(danceAreas[i].type);

//   area.addComponent(
//     new utils.TriggerComponent(
//       new utils.TriggerBoxShape(
//         new Vector3(
//           area.getComponent(Transform).scale.x,
//           area.getComponent(Transform).scale.y,
//           area.getComponent(Transform).scale.z
//         ),
//         new Vector3(0, 2.5, 0)
//       ),
//       {
//         enableDebug: false,
//         onCameraEnter: () => {
//           engine.addSystem(dsystem);
//           dsystem.addEvents();
//         },
//         onCameraExit: () => {
//           dsystem.removeEvents();
//           engine.removeSystem(dsystem);
//         },
//       }
//     )
//   );
// }
