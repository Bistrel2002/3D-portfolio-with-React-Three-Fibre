import {ContactShadows, Environment, OrbitControls, Sky} from "@react-three/drei";
import {Bistrel} from "./Bistrel.jsx";
import {useControls} from "leva";

export const Experience = () => {

    const {animations} = useControls({
        animations: {
            value: "Typing",
            options: ["Typing", "Standing", "Falling 1"],
        }
    })

  return (
      <>
          <OrbitControls/>
          <Sky/>
          <Environment preset="apartment"/>
          <group position-y={-1}>
              <Bistrel animation={animations}/>
              {animations === "Typing" && (
                  <mesh scale={[0.8, 0.5, 0.7]} position-y={0.18}>
                      <boxGeometry/>
                      <meshStandardMaterial color="blue"/>
                  </mesh>
              )}

              <ContactShadows
                  opacity={0.6}
                  scale={10}
                  blur={1}
                  far={10}
                  resolution={256}
                  color="#FFFFFF" />

              <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-0.007}>
                  <planeGeometry/>
                  <meshStandardMaterial color="black"/>
              </mesh>
          </group>
      </>
  );
};
