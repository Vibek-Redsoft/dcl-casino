import { movePlayerTo } from "@decentraland/RestrictedActions";
import Script1 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item";
import Script2 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item";
import NFTScript from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/nftItem";

import Script3 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item";
import Script4 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item";
import Script5 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item";
import { createChannel } from "../node_modules/decentraland-builder-scripts/channel";
import { createInventory } from "../node_modules/decentraland-builder-scripts/inventory";
import { clubGuard, guardCheckPoint } from "src/mainDoorAccess";
import { accessSecondFloor, elevatorStart } from "./mana";
import * as ui from "@dcl/ui-scene-utils";
import DancingSystem from "./danceFloor";

const music = new AudioStream(
  "https://icecast.ravepartyradio.org/ravepartyradio-192.mp3"
);

const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
_scene.addComponentOrReplace(transform);

const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape = new GLTFShape(
  "c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb"
);
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
entity.addComponentOrReplace(gltfShape);
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity.addComponentOrReplace(transform2);

const entity2 = new Entity("entity2");
engine.addEntity(entity2);
entity2.setParent(_scene);
entity2.addComponentOrReplace(gltfShape);
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity2.addComponentOrReplace(transform3);

const entity3 = new Entity("entity3");
engine.addEntity(entity3);
entity3.setParent(_scene);
entity3.addComponentOrReplace(gltfShape);
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity3.addComponentOrReplace(transform4);

const entity4 = new Entity("entity4");
engine.addEntity(entity4);
entity4.setParent(_scene);
entity4.addComponentOrReplace(gltfShape);
const transform5 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity4.addComponentOrReplace(transform5);

const entity5 = new Entity("entity5");
engine.addEntity(entity5);
entity5.setParent(_scene);
entity5.addComponentOrReplace(gltfShape);
const transform6 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity5.addComponentOrReplace(transform6);

const entity6 = new Entity("entity6");
engine.addEntity(entity6);
entity6.setParent(_scene);
entity6.addComponentOrReplace(gltfShape);
const transform7 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity6.addComponentOrReplace(transform7);

const entity7 = new Entity("entity7");
engine.addEntity(entity7);
entity7.setParent(_scene);
entity7.addComponentOrReplace(gltfShape);
const transform8 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity7.addComponentOrReplace(transform8);

const entity8 = new Entity("entity8");
engine.addEntity(entity8);
entity8.setParent(_scene);
entity8.addComponentOrReplace(gltfShape);
const transform9 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity8.addComponentOrReplace(transform9);

const entity9 = new Entity("entity9");
engine.addEntity(entity9);
entity9.setParent(_scene);
entity9.addComponentOrReplace(gltfShape);
const transform10 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity9.addComponentOrReplace(transform10);

const entity10 = new Entity("entity10");
engine.addEntity(entity10);
entity10.setParent(_scene);
const transform11 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity10.addComponentOrReplace(transform11);
const gltfShape2 = new GLTFShape("models/floors/1(1).glb");
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
entity10.addComponentOrReplace(gltfShape2);
entity10.addComponent(music);
music.playing = true;

const g = new Entity("g");
engine.addEntity(g);
g.setParent(_scene);
const transform12 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
g.addComponentOrReplace(transform12);
const gltfShape3 = new GLTFShape("models/buttons/G200.glb");
gltfShape3.withCollisions = true;
gltfShape3.isPointerBlocker = true;
gltfShape3.visible = true;
g.addComponentOrReplace(gltfShape3);
g.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity11);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      movePlayerTo({ x: 23.05, y: 13, z: 19.81 });
      addSecondFloorContent();
      removeThirdFloorContent();
      removeForthFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();
      addBalls([st, st2, st3, st4, st5, st6]);
      removeBalls([
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
      //  engine.removeEntity(entity16)
    },
    {
      hoverText: "second floor",
    }
  )
);

function addBalls(balls) {
  for (let i in balls) {
    engine.addEntity(balls[i]);
  }
}

function removeBalls(balls) {
  for (let i in balls) {
    engine.removeEntity(balls[i]);
  }
}

const g2 = new Entity("g2");
engine.addEntity(g2);
g2.setParent(_scene);
const transform1312 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
g2.addComponentOrReplace(transform1312);
const gltfShape424 = new GLTFShape("models/buttons/G300.glb");
gltfShape424.withCollisions = true;
gltfShape424.isPointerBlocker = true;
gltfShape424.visible = true;
g2.addComponentOrReplace(gltfShape424);
g2.addComponent(
  new OnPointerDown(
    () => {
      if (!elevatorStart) {
        log("IFFF");
        accessSecondFloor();
      } else {
        log("ELSEE");
        VIPFloor();
        // clubGuard.talk(guardCheckPoint, "mana");
      }
    },
    {
      hoverText: "Third Floor",
    }
  )
);

export const VIPFloor = () => {
  engine.addEntity(entity12);
  engine.removeEntity(entity11);
  engine.removeEntity(entity13);
  engine.removeEntity(entity14);
  // engine.removeEntity(entity15);
  movePlayerTo({ x: 23.05, y: 13, z: 19.81 });
  addThirdFloorContent();
  removeSecondFloorContent();
  removeForthFloorContent();
  removeFifthFloorContent();
  removeSixthFloorContent();
  addBalls([nd, nd2, nd3, nd4, nd5, nd6]);
  removeBalls([
    st,
    st2,
    st3,
    st4,
    st5,
    st6,
    th,
    th2,
    th3,
    th4,
    th5,
    th6,
    rd,
    rd2,
    rd3,
    rd4,
    rd5,
    rd6,
    th7,
    th8,
    th9,
    th10,
    th11,
    th12,
  ]);
};

const g3 = new Entity("g3");
engine.addEntity(g3);
g3.setParent(_scene);
const transform14 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
g3.addComponentOrReplace(transform14);
const gltfShape5 = new GLTFShape("models/buttons/G400.glb");
gltfShape5.withCollisions = true;
gltfShape5.isPointerBlocker = true;
gltfShape5.visible = true;
g3.addComponentOrReplace(gltfShape5);
g3.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity13);
      engine.removeEntity(entity12);
      engine.removeEntity(entity11);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      movePlayerTo({ x: 23.05, y: 13, z: 19.81 });
      addForthFloorContent();
      removeThirdFloorContent();
      removeSecondFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();
      addBalls([rd, rd2, rd3, rd4, rd5, rd6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "forth floor",
    }
  )
);

const g4 = new Entity("g4");
engine.addEntity(g4);
g4.setParent(_scene);
const transform15 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
g4.addComponentOrReplace(transform15);
const gltfShape6 = new GLTFShape("models/buttons/G500.glb");
gltfShape6.withCollisions = true;
gltfShape6.isPointerBlocker = true;
gltfShape6.visible = true;
g4.addComponentOrReplace(gltfShape6);
g4.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity14);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity11);
      // engine.removeEntity(entity15);
      movePlayerTo({ x: 26.72, y: 13, z: 18.91 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      addFifthFloorContent();
      removeSixthFloorContent();
      addBalls([th, th2, th3, th4, th5, th6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "fifth floor",
    }
  )
);

const g5 = new Entity("g5");
engine.addEntity(g5);
g5.setParent(_scene);
const transform16 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
g5.addComponentOrReplace(transform16);
const gltfShape7 = new GLTFShape("models/buttons/G600.glb");
gltfShape7.withCollisions = true;
gltfShape7.isPointerBlocker = true;
gltfShape7.visible = true;
g5.addComponentOrReplace(gltfShape7);
g5.addComponent(
  new OnPointerDown(
    () => {
      // engine.addEntity(entity15);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      engine.removeEntity(entity11);
      movePlayerTo({ x: 4.04, y: 38, z: 28.5 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      removeFifthFloorContent();
      addSixthFloorContent();
      addBalls([th7, th8, th9, th10, th11, th12]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
      ]);
    },
    {
      hoverText: "sixth floor",
    }
  )
);

const g6 = new Entity("g6");
engine.addEntity(g6);
g6.setParent(_scene);
const transform17 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
g6.addComponentOrReplace(transform17);
const gltfShape8 = new GLTFShape("models/buttons/G100.glb");
gltfShape8.withCollisions = true;
gltfShape8.isPointerBlocker = true;
gltfShape8.visible = true;
g6.addComponentOrReplace(gltfShape8);
g6.addComponent(
  new OnPointerDown(
    () => {
      movePlayerTo({ x: 23.05, y: 0, z: 19.81 });
    },
    {
      hoverText: "first floor",
    }
  )
);

const entity11 = new Entity("entity11");
// engine.addEntity(entity11)
// entity11.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity11.addComponentOrReplace(transform18);
const gltfShape9 = new GLTFShape("models/floors/2 (1).glb");
gltfShape9.withCollisions = true;
gltfShape9.isPointerBlocker = true;
gltfShape9.visible = true;
entity11.addComponentOrReplace(gltfShape9);

const st = new Entity("st");
// engine.addEntity(st)
// st.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
st.addComponentOrReplace(transform19);
const gltfShape10 = new GLTFShape("models/buttons/1st200.glb");
gltfShape10.withCollisions = true;
gltfShape10.isPointerBlocker = true;
gltfShape10.visible = true;
st.addComponentOrReplace(gltfShape10);
st.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity11);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      addSecondFloorContent();
      removeThirdFloorContent();
      removeForthFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();

      addBalls([st, st2, st3, st4, st5, st6]);
      removeBalls([
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
      //  engine.removeEntity(entity16)
    },
    {
      hoverText: "second floor",
    }
  )
);

const st2 = new Entity("st2");
// engine.addEntity(st2)
// st2.setParent(_scene)
const transform201 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
st2.addComponentOrReplace(transform201);
const gltfShape11 = new GLTFShape("models/buttons/1st300.glb");
gltfShape11.withCollisions = true;
gltfShape11.isPointerBlocker = true;
gltfShape11.visible = true;
st2.addComponentOrReplace(gltfShape11);
st2.addComponent(
  new OnPointerDown(
    () => {
      if (!elevatorStart) {
        log("IFFF");
        accessSecondFloor();
      } else {
        log("ELSEE");
        VIPFloor();
        // clubGuard.talk(guardCheckPoint, "mana");
      }
    },
    {
      hoverText: "Third Floor",
    }
  )
);

const st3 = new Entity("st3");
// engine.addEntity(st3)
// st3.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
st3.addComponentOrReplace(transform21);
const gltfShape12 = new GLTFShape("models/buttons/1st400.glb");
gltfShape12.withCollisions = true;
gltfShape12.isPointerBlocker = true;
gltfShape12.visible = true;
st3.addComponentOrReplace(gltfShape12);
st3.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity13);
      engine.removeEntity(entity12);
      engine.removeEntity(entity11);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      addForthFloorContent();
      removeThirdFloorContent();
      removeSecondFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();

      addBalls([rd, rd2, rd3, rd4, rd5, rd6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "forth floor",
    }
  )
);

const st4 = new Entity("st4");
// engine.addEntity(st4)
// st4.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
st4.addComponentOrReplace(transform22);
const gltfShape13 = new GLTFShape("models/buttons/1st500.glb");
gltfShape13.withCollisions = true;
gltfShape13.isPointerBlocker = true;
gltfShape13.visible = true;
st4.addComponentOrReplace(gltfShape13);
st4.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity14);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity11);
      // engine.removeEntity(entity15);
      movePlayerTo({ x: 26.72, y: 13, z: 18.91 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      addFifthFloorContent();
      removeSixthFloorContent();

      addBalls([th, th2, th3, th4, th5, th6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "fifth floor",
    }
  )
);

const st5 = new Entity("st5");
// engine.addEntity(st5)
// st5.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
st5.addComponentOrReplace(transform23);
const gltfShape14 = new GLTFShape("models/buttons/1st600.glb");
gltfShape14.withCollisions = true;
gltfShape14.isPointerBlocker = true;
gltfShape14.visible = true;
st5.addComponentOrReplace(gltfShape14);
st5.addComponent(
  new OnPointerDown(
    () => {
      // engine.addEntity(entity15);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      engine.removeEntity(entity11);
      addBalls([th7, th8, th9, th10, th11, th12]);
      movePlayerTo({ x: 4.04, y: 38, z: 28.5 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      removeFifthFloorContent();
      addSixthFloorContent();

      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
      ]);
    },
    {
      hoverText: "sixth floor",
    }
  )
);

const st6 = new Entity("st6");
// engine.addEntity(st6)
// st6.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
st6.addComponentOrReplace(transform24);
const gltfShape15 = new GLTFShape("models/buttons/1st100.glb");
gltfShape15.withCollisions = true;
gltfShape15.isPointerBlocker = true;
gltfShape15.visible = true;
st6.addComponentOrReplace(gltfShape15);
st6.addComponent(
  new OnPointerDown(
    () => {
      movePlayerTo({ x: 23.05, y: 0, z: 19.81 });
    },
    {
      hoverText: "first floor",
    }
  )
);

const nd = new Entity("nd");
// engine.addEntity(nd)
// nd.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
nd.addComponentOrReplace(transform25);
const gltfShape16 = new GLTFShape("models/buttons/2nd200.glb");
gltfShape16.withCollisions = true;
gltfShape16.isPointerBlocker = true;
gltfShape16.visible = true;
nd.addComponentOrReplace(gltfShape16);
nd.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity11);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      addSecondFloorContent();
      removeThirdFloorContent();
      removeForthFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();

      addBalls([st, st2, st3, st4, st5, st6]);
      removeBalls([
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
      //  engine.removeEntity(entity16)
    },
    {
      hoverText: "second floor",
    }
  )
);

const nd2 = new Entity("nd2");
// engine.addEntity(nd2)
// nd2.setParent(_scene)
const transform261 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
nd2.addComponentOrReplace(transform261);
const gltfShape17 = new GLTFShape("models/buttons/2nd300.glb");
gltfShape17.withCollisions = true;
gltfShape17.isPointerBlocker = true;
gltfShape17.visible = true;
nd2.addComponentOrReplace(gltfShape17);
nd2.addComponent(
  new OnPointerDown(
    () => {
      if (!elevatorStart) {
        log("IFFF");
        accessSecondFloor();
      } else {
        log("ELSEE");
        VIPFloor();

        // clubGuard.talk(guardCheckPoint, "mana");
      }
    },
    {
      hoverText: "Third Floor",
    }
  )
);

const nd3 = new Entity("nd3");
// engine.addEntity(nd3)
// nd3.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
nd3.addComponentOrReplace(transform27);
const gltfShape18 = new GLTFShape("models/buttons/2nd400.glb");
gltfShape18.withCollisions = true;
gltfShape18.isPointerBlocker = true;
gltfShape18.visible = true;
nd3.addComponentOrReplace(gltfShape18);
nd3.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity13);
      engine.removeEntity(entity12);
      engine.removeEntity(entity11);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      addForthFloorContent();
      removeThirdFloorContent();
      removeSecondFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();

      addBalls([rd, rd2, rd3, rd4, rd5, rd6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "forth floor",
    }
  )
);

const nd4 = new Entity("nd4");
// engine.addEntity(nd4)
// nd4.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
nd4.addComponentOrReplace(transform28);
const gltfShape19 = new GLTFShape("models/buttons/2nd500.glb");
gltfShape19.withCollisions = true;
gltfShape19.isPointerBlocker = true;
gltfShape19.visible = true;
nd4.addComponentOrReplace(gltfShape19);
nd4.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity14);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity11);
      // engine.removeEntity(entity15);
      movePlayerTo({ x: 26.72, y: 13, z: 18.91 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      addFifthFloorContent();
      removeSixthFloorContent();

      addBalls([th, th2, th3, th4, th5, th6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "fifth floor",
    }
  )
);

const nd5 = new Entity("nd5");
// engine.addEntity(nd5)
// nd5.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
nd5.addComponentOrReplace(transform29);
const gltfShape20 = new GLTFShape("models/buttons/2nd600.glb");
gltfShape20.withCollisions = true;
gltfShape20.isPointerBlocker = true;
gltfShape20.visible = true;
nd5.addComponentOrReplace(gltfShape20);
nd5.addComponent(
  new OnPointerDown(
    () => {
      // engine.addEntity(entity15);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      engine.removeEntity(entity11);
      addBalls([th7, th8, th9, th10, th11, th12]);
      movePlayerTo({ x: 4.04, y: 38, z: 28.5 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      removeFifthFloorContent();
      addSixthFloorContent();

      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
      ]);
    },
    {
      hoverText: "sixth floor",
    }
  )
);

const nd6 = new Entity("nd6");
// engine.addEntity(nd6)
// nd6.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
nd6.addComponentOrReplace(transform30);
const gltfShape21 = new GLTFShape("models/buttons/2nd100.glb");
gltfShape21.withCollisions = true;
gltfShape21.isPointerBlocker = true;
gltfShape21.visible = true;
nd6.addComponentOrReplace(gltfShape21);
nd6.addComponent(
  new OnPointerDown(
    () => {
      movePlayerTo({ x: 23.05, y: 0, z: 19.81 });
    },
    {
      hoverText: "first floor",
    }
  )
);

const entity12 = new Entity("entity12");
// engine.addEntity(entity12)
// entity12.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity12.addComponentOrReplace(transform31);
const gltfShape22 = new GLTFShape("models/floors/3 (1).glb");
gltfShape22.withCollisions = true;
gltfShape22.isPointerBlocker = true;
gltfShape22.visible = true;
entity12.addComponentOrReplace(gltfShape22);

const rd = new Entity("rd");
// engine.addEntity(rd)
// rd.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
rd.addComponentOrReplace(transform32);
const gltfShape23 = new GLTFShape("models/buttons/3rd200.glb");
gltfShape23.withCollisions = true;
gltfShape23.isPointerBlocker = true;
gltfShape23.visible = true;
rd.addComponentOrReplace(gltfShape23);
rd.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity11);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      addSecondFloorContent();
      removeThirdFloorContent();
      removeForthFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();

      addBalls([st, st2, st3, st4, st5, st6]);
      removeBalls([
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
      //  engine.removeEntity(entity16)
    },
    {
      hoverText: "second floor",
    }
  )
);

const rd2 = new Entity("rd2");
// engine.addEntity(rd2)
// rd2.setParent(_scene)
const transform331 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
rd2.addComponentOrReplace(transform331);
const gltfShape24 = new GLTFShape("models/buttons/3rd300.glb");
gltfShape24.withCollisions = true;
gltfShape24.isPointerBlocker = true;
gltfShape24.visible = true;
rd2.addComponentOrReplace(gltfShape24);
rd2.addComponent(
  new OnPointerDown(
    () => {
      if (!elevatorStart) {
        log("IFFF");
        accessSecondFloor();
      } else {
        log("ELSEE");
        VIPFloor();

        // clubGuard.talk(guardCheckPoint, "mana");
      }
    },
    {
      hoverText: "Third Floor",
    }
  )
);

const rd3 = new Entity("rd3");
// engine.addEntity(rd3)
// rd3.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
rd3.addComponentOrReplace(transform34);
const gltfShape25 = new GLTFShape("models/buttons/3rd400.glb");
gltfShape25.withCollisions = true;
gltfShape25.isPointerBlocker = true;
gltfShape25.visible = true;
rd3.addComponentOrReplace(gltfShape25);
rd3.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity13);
      engine.removeEntity(entity12);
      engine.removeEntity(entity11);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      addForthFloorContent();
      removeThirdFloorContent();
      removeSecondFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();

      addBalls([rd, rd2, rd3, rd4, rd5, rd6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "forth floor",
    }
  )
);

const rd4 = new Entity("rd4");
// engine.addEntity(rd4)
// rd4.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
rd4.addComponentOrReplace(transform35);
const gltfShape26 = new GLTFShape("models/buttons/3rd500.glb");
gltfShape26.withCollisions = true;
gltfShape26.isPointerBlocker = true;
gltfShape26.visible = true;
rd4.addComponentOrReplace(gltfShape26);
rd4.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity14);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity11);
      // engine.removeEntity(entity15);
      movePlayerTo({ x: 26.72, y: 13, z: 18.91 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      addFifthFloorContent();
      removeSixthFloorContent();

      addBalls([th, th2, th3, th4, th5, th6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "fifth floor",
    }
  )
);

const rd5 = new Entity("rd5");
// engine.addEntity(rd5)
// rd5.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
rd5.addComponentOrReplace(transform36);
const gltfShape27 = new GLTFShape("models/buttons/3rd600.glb");
gltfShape27.withCollisions = true;
gltfShape27.isPointerBlocker = true;
gltfShape27.visible = true;
rd5.addComponentOrReplace(gltfShape27);
rd5.addComponent(
  new OnPointerDown(
    () => {
      // engine.addEntity(entity15);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      engine.removeEntity(entity11);
      addBalls([th7, th8, th9, th10, th11, th12]);
      movePlayerTo({ x: 4.04, y: 38, z: 28.5 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      removeFifthFloorContent();
      addSixthFloorContent();

      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
      ]);
    },
    {
      hoverText: "sixth floor",
    }
  )
);

const rd6 = new Entity("rd6");
// engine.addEntity(rd6)
// rd6.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
rd6.addComponentOrReplace(transform37);
const gltfShape28 = new GLTFShape("models/buttons/3rd100.glb");
gltfShape28.withCollisions = true;
gltfShape28.isPointerBlocker = true;
gltfShape28.visible = true;
rd6.addComponentOrReplace(gltfShape28);
rd6.addComponent(
  new OnPointerDown(
    () => {
      movePlayerTo({ x: 23.05, y: 0, z: 19.81 });
    },
    {
      hoverText: "first floor",
    }
  )
);

const entity13 = new Entity("entity13");
// engine.addEntity(entity13)
// entity13.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity13.addComponentOrReplace(transform38);
const gltfShape29 = new GLTFShape("models/fiveFloors/4 (2).glb");
gltfShape29.withCollisions = true;
gltfShape29.isPointerBlocker = true;
gltfShape29.visible = true;
entity13.addComponentOrReplace(gltfShape29);

const th = new Entity("th");
// engine.addEntity(th)
// th.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th.addComponentOrReplace(transform39);
const gltfShape30 = new GLTFShape("models/buttons/4th200.glb");
gltfShape30.withCollisions = true;
gltfShape30.isPointerBlocker = true;
gltfShape30.visible = true;
th.addComponentOrReplace(gltfShape30);
th.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity11);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      addSecondFloorContent();
      removeThirdFloorContent();
      removeForthFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();

      addBalls([st, st2, st3, st4, st5, st6]);
      removeBalls([
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
      //  engine.removeEntity(entity16)
    },
    {
      hoverText: "second floor",
    }
  )
);

const th2 = new Entity("th2");
// // engine.addEntity(th2)
// // th2.setParent(_scene)
const transform401 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th2.addComponentOrReplace(transform401);
const gltfShape311 = new GLTFShape("models/buttons/4th300.glb");
gltfShape311.withCollisions = true;
gltfShape311.isPointerBlocker = true;
gltfShape311.visible = true;
th2.addComponentOrReplace(gltfShape311);
th2.addComponent(
  new OnPointerDown(
    () => {
      if (!elevatorStart) {
        log("IFFF");
        accessSecondFloor();
      } else {
        log("ELSEE");
        VIPFloor();

        // clubGuard.talk(guardCheckPoint, "mana");
      }
    },
    {
      hoverText: "Third Floor",
    }
  )
);

const th3 = new Entity("th3");
// engine.addEntity(th3)
// th3.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th3.addComponentOrReplace(transform41);
const gltfShape32 = new GLTFShape("models/buttons/4th400.glb");
gltfShape32.withCollisions = true;
gltfShape32.isPointerBlocker = true;
gltfShape32.visible = true;
th3.addComponentOrReplace(gltfShape32);
th3.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity13);
      engine.removeEntity(entity12);
      engine.removeEntity(entity11);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      addForthFloorContent();
      removeThirdFloorContent();
      removeSecondFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();

      addBalls([rd, rd2, rd3, rd4, rd5, rd6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "forth floor",
    }
  )
);

const th4 = new Entity("th4");
// engine.addEntity(th4)
// th4.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th4.addComponentOrReplace(transform42);
const gltfShape33 = new GLTFShape("models/buttons/4th500.glb");
gltfShape33.withCollisions = true;
gltfShape33.isPointerBlocker = true;
gltfShape33.visible = true;
th4.addComponentOrReplace(gltfShape33);
th4.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity14);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity11);
      // engine.removeEntity(entity15);
      movePlayerTo({ x: 26.72, y: 13, z: 18.91 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      addFifthFloorContent();
      removeSixthFloorContent();

      addBalls([th, th2, th3, th4, th5, th6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "fifth floor",
    }
  )
);

const th5 = new Entity("th5");
// engine.addEntity(th5)
// th5.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th5.addComponentOrReplace(transform43);
const gltfShape34 = new GLTFShape("models/buttons/4th600.glb");
gltfShape34.withCollisions = true;
gltfShape34.isPointerBlocker = true;
gltfShape34.visible = true;
th5.addComponentOrReplace(gltfShape34);
th5.addComponent(
  new OnPointerDown(
    () => {
      // engine.addEntity(entity15);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      engine.removeEntity(entity11);
      addBalls([th7, th8, th9, th10, th11, th12]);
      movePlayerTo({ x: 4.04, y: 38, z: 28.5 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      removeFifthFloorContent();
      addSixthFloorContent();

      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
      ]);
    },
    {
      hoverText: "sixth floor",
    }
  )
);

const th6 = new Entity("th6");
// engine.addEntity(th6)
// th6.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th6.addComponentOrReplace(transform44);
const gltfShape35 = new GLTFShape("models/buttons/4th100.glb");
gltfShape35.withCollisions = true;
gltfShape35.isPointerBlocker = true;
gltfShape35.visible = true;
th6.addComponentOrReplace(gltfShape35);
th6.addComponent(
  new OnPointerDown(
    () => {
      movePlayerTo({ x: 23.05, y: 0, z: 19.81 });
    },
    {
      hoverText: "first floor",
    }
  )
);

const entity14 = new Entity("entity14");
// engine.addEntity(entity14)
// entity14.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity14.addComponentOrReplace(transform45);
const gltfShape36 = new GLTFShape("models/fiveFloors/5.glb");
gltfShape36.withCollisions = true;
gltfShape36.isPointerBlocker = true;
gltfShape36.visible = true;
entity14.addComponentOrReplace(gltfShape36);

const th7 = new Entity("th7");
// engine.addEntity(th7)
// th7.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th7.addComponentOrReplace(transform46);
const gltfShape37 = new GLTFShape("models/buttons/5th200.glb");
gltfShape37.withCollisions = true;
gltfShape37.isPointerBlocker = true;
gltfShape37.visible = true;
th7.addComponentOrReplace(gltfShape37);
th7.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity11);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      movePlayerTo({ x: 23.05, y: 13, z: 19.81 });
      // engine.removeEntity(entity15);
      addSecondFloorContent();
      removeThirdFloorContent();
      removeForthFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();

      addBalls([st, st2, st3, st4, st5, st6]);
      removeBalls([
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
      //  engine.removeEntity(entity16)
    },
    {
      hoverText: "second floor",
    }
  )
);

const th8 = new Entity("th8");
// engine.addEntity(th8)
// th8.setParent(_scene)
const transform471 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th8.addComponentOrReplace(transform471);
const gltfShape38 = new GLTFShape("models/buttons/5th300.glb");
gltfShape38.withCollisions = true;
gltfShape38.isPointerBlocker = true;
gltfShape38.visible = true;
th8.addComponentOrReplace(gltfShape38);
th8.addComponent(
  new OnPointerDown(
    () => {
      if (!elevatorStart) {
        log("IFFF");
        accessSecondFloor();
      } else {
        log("ELSEE");
        VIPFloor();

        // clubGuard.talk(guardCheckPoint, "mana");
      }
    },
    {
      hoverText: "Third Floor",
    }
  )
);

const th9 = new Entity("th9");
// engine.addEntity(th9)
// th9.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th9.addComponentOrReplace(transform48);
const gltfShape39 = new GLTFShape("models/buttons/5th400.glb");
gltfShape39.withCollisions = true;
gltfShape39.isPointerBlocker = true;
gltfShape39.visible = true;
th9.addComponentOrReplace(gltfShape39);
th9.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity13);
      engine.removeEntity(entity12);
      engine.removeEntity(entity11);
      engine.removeEntity(entity14);
      // engine.removeEntity(entity15);
      movePlayerTo({ x: 23.05, y: 13, z: 19.81 });
      addForthFloorContent();
      removeThirdFloorContent();
      removeSecondFloorContent();
      removeFifthFloorContent();
      removeSixthFloorContent();

      addBalls([rd, rd2, rd3, rd4, rd5, rd6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "forth floor",
    }
  )
);

const th10 = new Entity("th10");
// engine.addEntity(th10)
// th10.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th10.addComponentOrReplace(transform49);
const gltfShape40 = new GLTFShape("models/buttons/5th500.glb");
gltfShape40.withCollisions = true;
gltfShape40.isPointerBlocker = true;
gltfShape40.visible = true;
th10.addComponentOrReplace(gltfShape40);
th10.addComponent(
  new OnPointerDown(
    () => {
      engine.addEntity(entity14);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity11);
      // engine.removeEntity(entity15);
      movePlayerTo({ x: 26.72, y: 13, z: 18.91 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      addFifthFloorContent();
      removeSixthFloorContent();

      addBalls([th, th2, th3, th4, th5, th6]);
      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th7,
        th8,
        th9,
        th10,
        th11,
        th12,
      ]);
    },
    {
      hoverText: "fifth floor",
    }
  )
);

const th11 = new Entity("th11");
// engine.addEntity(th11)
// th11.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th11.addComponentOrReplace(transform50);
const gltfShape41 = new GLTFShape("models/buttons/5th600.glb");
gltfShape41.withCollisions = true;
gltfShape41.isPointerBlocker = true;
gltfShape41.visible = true;
th11.addComponentOrReplace(gltfShape41);
th11.addComponent(
  new OnPointerDown(
    () => {
      // engine.addEntity(entity15);
      engine.removeEntity(entity12);
      engine.removeEntity(entity13);
      engine.removeEntity(entity14);
      engine.removeEntity(entity11);
      addBalls([th7, th8, th9, th10, th11, th12]);
      movePlayerTo({ x: 4.04, y: 38, z: 28.5 });
      removeSecondFloorContent();
      removeForthFloorContent();
      removeThirdFloorContent();
      removeFifthFloorContent();
      addSixthFloorContent();

      removeBalls([
        st,
        st2,
        st3,
        st4,
        st5,
        st6,
        nd,
        nd2,
        nd3,
        nd4,
        nd5,
        nd6,
        rd,
        rd2,
        rd3,
        rd4,
        rd5,
        rd6,
        th,
        th2,
        th3,
        th4,
        th5,
        th6,
      ]);
    },
    {
      hoverText: "sixth floor",
    }
  )
);

const th12 = new Entity("th12");
// engine.addEntity(th12)
// th12.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
th12.addComponentOrReplace(transform51);
const gltfShape42 = new GLTFShape("models/buttons/5th100.glb");
gltfShape42.withCollisions = true;
gltfShape42.isPointerBlocker = true;
gltfShape42.visible = true;
th12.addComponentOrReplace(gltfShape42);
th12.addComponent(
  new OnPointerDown(
    () => {
      movePlayerTo({ x: 23.05, y: 0, z: 19.81 });
    },
    {
      hoverText: "first floor",
    }
  )
);

const entity15 = new Entity("entity15");
engine.addEntity(entity15);
entity15.setParent(_scene);
const transform52 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity15.addComponentOrReplace(transform52);
const gltfShape43 = new GLTFShape("models/floors/6(1).glb");
gltfShape43.withCollisions = true;
gltfShape43.isPointerBlocker = true;
gltfShape43.visible = true;
entity15.addComponentOrReplace(gltfShape43);

// Main Door

const clickArea = new Entity("clickArea");
engine.addEntity(clickArea);
clickArea.setParent(_scene);
const transform231 = new Transform({
  position: new Vector3(3.0364997386932373, 0, 23.998682022094727),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 5.614905834197998, 5.820416450500488),
});
clickArea.addComponentOrReplace(transform231);

const toolbox = new Entity("toolbox");
engine.addEntity(toolbox);
toolbox.setParent(_scene);
const transform221 = new Transform({
  position: new Vector3(1.1063861846923828, 0, 30.532535552978516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
toolbox.addComponentOrReplace(transform221);

const door = new Entity("door");
engine.addEntity(door);
door.setParent(_scene);
const transform211 = new Transform({
  position: new Vector3(24, -0.1, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
door.addComponentOrReplace(transform211);
const gltfShape31 = new GLTFShape("models/Door.glb");
gltfShape31.withCollisions = true;
gltfShape31.isPointerBlocker = true;
gltfShape31.visible = true;
door.addComponentOrReplace(gltfShape31);
door.addComponent(
  new OnPointerDown((e) => {
    //Age Year Verification Event..
    let prompt = new ui.FillInPrompt(
      "I'm going to need to see some ID",
      (e: string) => {
        let submittedText: number = +e;
        if (submittedText <= 2002) {
          clubGuard.talk(guardCheckPoint, "welcome");
          prompt.hide();
          prompt.close();
          script4.spawn(
            clickArea,
            {
              enabled: true,
              onClickText: "Click To Open Door",
              // button: "POINTER",
              onClick: [
                {
                  entityName: "toolbox",
                  actionId: "move",
                  values: {
                    target: "door",
                    x: 0,
                    y: 5,
                    z: 0,
                    curve: "easeinoutsine",
                    speed: 2,
                    relative: true,
                    onComplete: [
                      {
                        entityName: "toolbox",
                        actionId: "delay",
                        values: {
                          timeout: 3,
                          onTimeout: [
                            {
                              entityName: "toolbox",
                              actionId: "move",
                              values: {
                                target: "door",
                                x: 0,
                                y: -5,
                                z: 0,
                                curve: "linear",
                                speed: 5,
                                relative: true,
                                onComplete: [],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
            createChannel(channelId, clickArea, channelBus)
          );
        } else {
          clubGuard.talk(guardCheckPoint, "under 18");
          prompt.hide();
          prompt.close();
        }
      },
      "Submit",
      "Enter your Birth Year"
    );
  })
);

// Second & Third Floor Videos

const videoStream = new Entity("videoStream");
// engine.addEntity(videoStream);
// videoStream.setParent(_scene);
const transform121 = new Transform({
  position: new Vector3(
    0.7299885749816895,
    13.12996768951416,
    24.346216201782227
  ),
  rotation: new Quaternion(
    -1.5014858600494022e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071067690849304
  ),
  scale: new Vector3(4.054347038269043, 2.026676893234253, 1),
});
videoStream.addComponentOrReplace(transform121);

const videoStream2 = new Entity("videoStream2");
// engine.addEntity(videoStream2);
// videoStream2.setParent(_scene);
const transform13 = new Transform({
  position: new Vector3(
    0.7299884557723999,
    11.22996768951416,
    24.346216201782227
  ),
  rotation: new Quaternion(
    -1.5014858600494022e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071067690849304
  ),
  scale: new Vector3(4.054347038269043, 3.1212706565856934, 1),
});
videoStream2.addComponentOrReplace(transform13);

// Ground Floor Images
const imageFromURL = new Entity("imageFromURL");
engine.addEntity(imageFromURL);
imageFromURL.setParent(_scene);
const transform1211 = new Transform({
  position: new Vector3(
    26.665163040161133,
    4.162246227264404,
    31.36690902709961
  ),
  rotation: new Quaternion(
    -5.7769201308201495e-15,
    -1,
    1.1920928244535389e-7,
    0
  ),
  scale: new Vector3(10.303632736206055, 4.539679050445557, 3.6722373962402344),
});
imageFromURL.addComponentOrReplace(transform1211);

const imageFromURL2 = new Entity("imageFromURL2");
engine.addEntity(imageFromURL2);
imageFromURL2.setParent(_scene);
const transform1311 = new Transform({
  position: new Vector3(
    35.89406967163086,
    0.41933536529541016,
    28.67559051513672
  ),
  rotation: new Quaternion(
    -4.084899820879168e-15,
    -0.7071068286895752,
    8.429370268459024e-8,
    0.7071068286895752
  ),
  scale: new Vector3(3.758150577545166, 9.153627395629883, 3.6722536087036133),
});
imageFromURL2.addComponentOrReplace(transform1311);

const imageFromURL3 = new Entity("imageFromURL3");
engine.addEntity(imageFromURL3);
imageFromURL3.setParent(_scene);
const transform1411 = new Transform({
  position: new Vector3(
    35.89406967163086,
    0.41933536529541016,
    19.718713760375977
  ),
  rotation: new Quaternion(
    -4.084899820879168e-15,
    -0.7071068286895752,
    8.429370268459024e-8,
    0.7071068286895752
  ),
  scale: new Vector3(3.1484243869781494, 9.153627395629883, 3.6722564697265625),
});
imageFromURL3.addComponentOrReplace(transform1411);

const imageFromURL4 = new Entity("imageFromURL4");
engine.addEntity(imageFromURL4);
imageFromURL4.setParent(_scene);
const transform1511 = new Transform({
  position: new Vector3(
    31.979896545410156,
    3.662245750427246,
    16.446392059326172
  ),
  rotation: new Quaternion(
    7.268970784990968e-15,
    8.940696005765858e-8,
    1.0121736246729036e-14,
    1
  ),
  scale: new Vector3(7.072650909423828, 4.225323677062988, 3.770141363143921),
});
imageFromURL4.addComponentOrReplace(transform1511);

const imageFromURL5 = new Entity("imageFromURL5");
engine.addEntity(imageFromURL5);
imageFromURL5.setParent(_scene);
const transform1611 = new Transform({
  position: new Vector3(
    17.936988830566406,
    3.662245750427246,
    16.446392059326172
  ),
  rotation: new Quaternion(
    7.268970784990968e-15,
    8.940696005765858e-8,
    1.0121736246729036e-14,
    1
  ),
  scale: new Vector3(7.072650909423828, 4.225323677062988, 3.770141363143921),
});
imageFromURL5.addComponentOrReplace(transform1611);

const imageFromURL6 = new Entity("imageFromURL6");
engine.addEntity(imageFromURL6);
imageFromURL6.setParent(_scene);
const transform1711 = new Transform({
  position: new Vector3(
    11.538857460021973,
    0.41933536529541016,
    19.136722564697266
  ),
  rotation: new Quaternion(
    1.6897016419511676e-14,
    0.7071067690849304,
    -8.429366715745346e-8,
    0.7071068286895752
  ),
  scale: new Vector3(4.574152946472168, 9.153627395629883, 3.672257900238037),
});
imageFromURL6.addComponentOrReplace(transform1711);

const imageFromURL7 = new Entity("imageFromURL7");
engine.addEntity(imageFromURL7);
imageFromURL7.setParent(_scene);
const transform1811 = new Transform({
  position: new Vector3(
    11.538857460021973,
    0.41933536529541016,
    28.994083404541016
  ),
  rotation: new Quaternion(
    1.6897016419511676e-14,
    0.7071067690849304,
    -8.429366715745346e-8,
    0.7071068286895752
  ),
  scale: new Vector3(4.574152946472168, 9.153627395629883, 3.672257900238037),
});
imageFromURL7.addComponentOrReplace(transform1811);

const videoStream1 = new Entity("videoStream1");
engine.addEntity(videoStream1);
videoStream1.setParent(_scene);
const transform1911 = new Transform({
  position: new Vector3(
    47.49940490722656,
    1.081951379776001,
    23.567663192749023
  ),
  rotation: new Quaternion(
    1.567124624241977e-14,
    0.70710688829422,
    -8.429370268459024e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(
    3.3212504386901855,
    3.8541383743286133,
    20.178869247436523
  ),
});
videoStream1.addComponentOrReplace(transform1911);

const imageFromURL8 = new Entity("imageFromURL8");
engine.addEntity(imageFromURL8);
imageFromURL8.setParent(_scene);
const transform20 = new Transform({
  position: new Vector3(
    40.62651062011719,
    0.8584024906158447,
    16.4464111328125
  ),
  rotation: new Quaternion(
    7.268970784990968e-15,
    8.940696005765858e-8,
    1.0121736246729036e-14,
    1
  ),
  scale: new Vector3(7.6298828125, 6.5433878898620605, 3.528719663619995),
});
imageFromURL8.addComponentOrReplace(transform20);

// Exterior Image
const imageFromURLE1 = new Entity("imageFromURLE1");
engine.addEntity(imageFromURLE1);
imageFromURLE1.setParent(_scene);
const transform1212 = new Transform({
  position: new Vector3(0.21926581859588623, 11.155660629272461, 24),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(6.0367817878723145, 23.46923828125, 5.159957408905029),
});
imageFromURLE1.addComponentOrReplace(transform1212);

// Teres Video

const videoStreamteres = new Entity("videoStreamteres");
// engine.addEntity(videoStreamteres);
// videoStreamteres.setParent(_scene);
const transform1213 = new Transform({
  position: new Vector3(
    45.67538070678711,
    37.45682907104492,
    24.203052520751953
  ),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.4434126615524292, 1.9469515085220337, 1.000002145767212),
});
videoStreamteres.addComponentOrReplace(transform1213);

// Fifth Floor
const imageFromURLfifthFloorFront = new Entity("imageFromURLfifthFloorFront");
// engine.addEntity(imageFromURLfifthFloorFront)
// imageFromURLfifthFloorFront.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(27.11, 11.3, 28.8),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    90,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.766134262084961, 4.977100372314453, 1.0000004768371582),
});
imageFromURLfifthFloorFront.addComponentOrReplace(transform101);

const imageFromURLFifthFloorSide = new Entity("imageFromURLFifthFloorSide");
// engine.addEntity(imageFromURLFifthFloorSide)
// imageFromURLFifthFloorSide.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(31.6, 11.3, 26.05),
  rotation: new Quaternion(0, -1, 0, 1),
  scale: new Vector3(2.766134262084961, 4.977100372314453, 1),
});
imageFromURLFifthFloorSide.addComponentOrReplace(transform71);

const fifthFloorVideoStream = new Entity("fifthFloorVideoStream");
// engine.addEntity(fifthFloorVideoStream)
// fifthFloorVideoStream.setParent(_scene)
const transform161 = new Transform({
  position: new Vector3(38.85, 11, 16.4),
  rotation: new Quaternion(
    -6.692902301134779e-16,
    8.940696005765858e-8,
    8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(3.500012159347534, 2.5, 1.0000033378601074),
});
fifthFloorVideoStream.addComponentOrReplace(transform161);

/////////// End of fifth floor /////////////

// Forth Floor //////////////////

const imageFromURL31 = new Entity("imageFromURL31");
// engine.addEntity(imageFromURL31)
// imageFromURL31.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(
    29.324628829956055,
    11.135498046875,
    31.516807556152344
  ),
  rotation: new Quaternion(
    -5.462677683652382e-15,
    1,
    -1.1920928955078125e-7,
    -5.960464477539063e-8
  ),
  scale: new Vector3(2.8236098289489746, 2.8236095905303955, 1.48683500289917),
});
imageFromURL31.addComponentOrReplace(transform124);

const imageFromURL1 = new Entity("imageFromURL1");
// engine.addEntity(imageFromURL1)
// imageFromURL1.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(33.39900207519531, 11.135498046875, 31.516807556152344),
  rotation: new Quaternion(
    -5.462677683652382e-15,
    1,
    -1.1920928955078125e-7,
    -5.960464477539063e-8
  ),
  scale: new Vector3(2.8236098289489746, 2.8236095905303955, 1.48683500289917),
});
imageFromURL1.addComponentOrReplace(transform134);

const imageFromURL21 = new Entity("imageFromURL21");
// engine.addEntity(imageFromURL21)
// imageFromURL21.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(
    37.498661041259766,
    11.135498046875,
    31.516807556152344
  ),
  rotation: new Quaternion(
    -5.462677683652382e-15,
    1,
    -1.1920928955078125e-7,
    -5.960464477539063e-8
  ),
  scale: new Vector3(2.8236098289489746, 2.8236095905303955, 1.48683500289917),
});
imageFromURL21.addComponentOrReplace(transform144);

const imageFromURL41 = new Entity("imageFromURL41");
// engine.addEntity(imageFromURL41)
// imageFromURL41.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(
    25.322219848632812,
    11.135498046875,
    31.516807556152344
  ),
  rotation: new Quaternion(
    -5.462677683652382e-15,
    1,
    -1.1920928955078125e-7,
    -5.960464477539063e-8
  ),
  scale: new Vector3(2.8236098289489746, 2.8236095905303955, 1.48683500289917),
});
imageFromURL41.addComponentOrReplace(transform154);

const videoStream41 = new Entity("videoStream41");
// engine.addEntity(videoStream41)
// videoStream41.setParent(_scene)
const transform1641 = new Transform({
  position: new Vector3(
    29.23065948486328,
    10.254388809204102,
    25.613788604736328
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.6135895252227783, 1),
});
videoStream41.addComponentOrReplace(transform1641);

const videoStream42 = new Entity("videoStream42");
// engine.addEntity(videoStream42)
// videoStream42.setParent(_scene)
const transform1742 = new Transform({
  position: new Vector3(
    29.23065948486328,
    10.254388809204102,
    22.372703552246094
  ),
  rotation: new Quaternion(
    -2.199152911505761e-15,
    -1,
    1.1920928244535389e-7,
    -2.9802322387695312e-8
  ),
  scale: new Vector3(
    1.0000009536743164,
    1.6135895252227783,
    1.0000009536743164
  ),
});
videoStream42.addComponentOrReplace(transform1742);
/// End Of forth Floor

const s1 = new DancingSystem();
s1.spawn(_scene, {});

function addSecondFloorContent() {
  engine.addEntity(videoStream);
  s1.spawn(_scene, {
    enableSecondFloorDance: true,
    enableThirdFloorDance: false,
  });
}

function addThirdFloorContent() {
  engine.addEntity(videoStream2);
  s1.spawn(_scene, {
    enableThirdFloorDance: true,
    enableSecondFloorDance: false,
  });
}

function removeThirdFloorContent() {
  engine.removeEntity(videoStream2);
}

function removeSecondFloorContent() {
  engine.removeEntity(videoStream);

  // engine.removeEntity(mana2);
  // engine.removeEntity(mana3);
  // engine.removeEntity(elevator);
}

function addForthFloorContent() {
  engine.addEntity(videoStream41);
  engine.addEntity(videoStream42);
  engine.addEntity(imageFromURL1);
  engine.addEntity(imageFromURL21);
  engine.addEntity(imageFromURL31);
  engine.addEntity(imageFromURL41);
}

function removeForthFloorContent() {
  engine.removeEntity(videoStream41);
  engine.removeEntity(videoStream42);
  engine.removeEntity(imageFromURL1);
  engine.removeEntity(imageFromURL21);
  engine.removeEntity(imageFromURL31);
  engine.removeEntity(imageFromURL41);
}

function addFifthFloorContent() {
  engine.addEntity(imageFromURLfifthFloorFront);
  engine.addEntity(imageFromURLFifthFloorSide);
  engine.addEntity(fifthFloorVideoStream);
}

function removeFifthFloorContent() {
  engine.removeEntity(imageFromURLfifthFloorFront);
  engine.removeEntity(imageFromURLFifthFloorSide);
  engine.removeEntity(fifthFloorVideoStream);
}

function addSixthFloorContent() {
  engine.addEntity(videoStreamteres);
}

function removeSixthFloorContent() {
  engine.removeEntity(videoStreamteres);
}

const channelId = Math.random().toString(16).slice(2);
const channelBus = new MessageBus();
const inventory = createInventory(UICanvas, UIContainerStack, UIImage);
const options = { inventory };

const script1 = new Script1();
const script2 = new Script2();
const nftScript = new NFTScript();
const script3 = new Script3();
const script4 = new Script4();
const script5 = new Script5();

script1.init();
script3.init();
script4.init();
script5.init();

script1.spawn(
  videoStream,
  {
    startOn: false,
    onClickText: "Play video",
    volume: 1,
    onClick: [{ entityName: "videoStream", actionId: "toggle", values: {} }],
  },
  createChannel(channelId, videoStream, channelBus)
);
script1.spawn(
  videoStream2,
  {
    startOn: false,
    onClickText: "Play video",
    volume: 1,
    onClick: [{ entityName: "videoStream2", actionId: "toggle", values: {} }],
  },
  createChannel(channelId, videoStream2, channelBus)
);
script1.spawn(
  videoStream1,
  {
    startOn: false,
    onClickText: "Play video",
    volume: 1,
    onClick: [{ entityName: "videoStream", actionId: "toggle", values: {} }],
  },
  createChannel(channelId, videoStream, channelBus)
);
script1.spawn(
  videoStreamteres,
  {
    startOn: false,
    onClickText: "Play video",
    volume: 1,
    onClick: [{ entityName: "videoStream", actionId: "toggle", values: {} }],
  },
  createChannel(channelId, videoStream, channelBus)
);

// 4th floor Videos
script1.spawn(
  videoStream41,
  {
    startOn: false,
    onClickText: "Play video",
    volume: 1,
    onClick: [{ entityName: "videoStream41", actionId: "toggle", values: {} }],
  },
  createChannel(channelId, videoStream41, channelBus)
);

script1.spawn(
  videoStream42,
  {
    startOn: false,
    onClickText: "Play video",
    volume: 1,
    onClick: [{ entityName: "videoStream42", actionId: "toggle", values: {} }],
  },
  createChannel(channelId, videoStream42, channelBus)
);

// 5th floor Video
script1.spawn(
  fifthFloorVideoStream,
  {
    startOn: false,
    onClickText: "Play video",
    volume: 1,
    onClick: [
      { entityName: "fifthFloorVideoStream", actionId: "toggle", values: {} },
    ],
  },
  createChannel(channelId, fifthFloorVideoStream, channelBus)
);
///////////////////////////////////

// Images
script2.spawn(
  imageFromURL,
  { image: "images/horizontalBanner.png" },
  createChannel(channelId, imageFromURL, channelBus)
);
script2.spawn(
  imageFromURL2,
  { image: "images/verticalBanner.png" },
  createChannel(channelId, imageFromURL2, channelBus)
);
script2.spawn(
  imageFromURL3,
  { image: "images/verticalBanner.png" },
  createChannel(channelId, imageFromURL3, channelBus)
);
script2.spawn(
  imageFromURL4,
  { image: "images/horizontalBanner.png" },
  createChannel(channelId, imageFromURL4, channelBus)
);
script2.spawn(
  imageFromURL5,
  { image: "images/horizontalBanner.png" },
  createChannel(channelId, imageFromURL5, channelBus)
);
script2.spawn(
  imageFromURL6,
  { image: "images/verticalBanner.png" },
  createChannel(channelId, imageFromURL6, channelBus)
);
script2.spawn(
  imageFromURL7,
  { image: "images/verticalBanner.png" },
  createChannel(channelId, imageFromURL7, channelBus)
);
script2.spawn(
  imageFromURL8,
  { image: "images/multiLogo.png" },
  createChannel(channelId, imageFromURL8, channelBus)
);
script2.spawn(
  imageFromURLE1,
  { image: "images/verticalBanner.png" },
  createChannel(channelId, imageFromURLE1, channelBus)
);
// script2.spawn(imageFromURLE2, {"image":"images/horizontalBanner.png"}, createChannel(channelId, imageFromURLE2, channelBus))

script2.spawn(
  imageFromURLfifthFloorFront,
  { image: "images/verticalBanner.png" },
  createChannel(channelId, imageFromURLfifthFloorFront, channelBus)
);
script2.spawn(
  imageFromURLFifthFloorSide,
  { image: "images/verticalBanner.png" },
  createChannel(channelId, imageFromURLFifthFloorSide, channelBus)
);

// Forth Floor Images
nftScript.spawn(
  imageFromURL1,
  {
    image: "images/verticalBanner.png",
    id: "558536",
    contract: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
    style: "Classic",
    color: "#FFFFFF",
    ui: true,
  },
  createChannel(channelId, imageFromURL1, channelBus)
);
nftScript.spawn(
  imageFromURL21,
  {
    image: "images/verticalBanner.png",
    id: "558536",
    contract: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
    style: "Classic",
    color: "#FFFFFF",
    ui: true,
  },
  createChannel(channelId, imageFromURL21, channelBus)
);
nftScript.spawn(
  imageFromURL31,
  {
    image: "images/verticalBanner.png",
    id: "558536",
    contract: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
    style: "Classic",
    color: "#FFFFFF",
    ui: true,
  },
  createChannel(channelId, imageFromURL31, channelBus)
);
nftScript.spawn(
  imageFromURL41,
  {
    image: "images/verticalBanner.png",
    id: "558536",
    contract: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
    style: "Classic",
    color: "#FFFFFF",
    ui: true,
  },
  createChannel(channelId, imageFromURL41, channelBus)
);

script3.spawn(toolbox, {}, createChannel(channelId, toolbox, channelBus));

// 32 NFTS
// function addForthFloorContent(){
// script5.spawn(
//   nftPictureFrame,
//   {
//     id: "558536",
//     contract: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
//     style: "Classic",
//     color: "#FFFFFF",
//     ui: true,
//   },
//   createChannel(channelId, nftPictureFrame, channelBus)
// );
