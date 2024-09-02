/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 .\public\module\bistrel.glb 
*/

import React, {useEffect, useRef} from 'react'
import {useFrame, useGraph} from '@react-three/fiber'
import {useAnimations, useFBX, useGLTF} from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import {useControls} from "leva";
import * as THREE from "three";

export function Bistrel(props) {

    const {headFollow, cursorFollow} = useControls({
        headFollow: false,
        cursorFollow: false,
    })

    const {animation} = props;

    const group = useRef();

    const { scene } = useGLTF('module/bistrel.glb');

    const {animations: standingAnimation} = useFBX("animations/Standing.fbx");
    standingAnimation[0].name = "Standing";

    const {animations: falling1Animation} = useFBX("animations/Falling Idle.fbx");
    falling1Animation[0].name = "Falling 1";

    const {animations: typingAnimations} = useFBX("animations/Typing.fbx");

    console.log(typingAnimations);

    typingAnimations[0].name = "Typing";
    const { actions } = useAnimations([typingAnimations[0], standingAnimation[0], falling1Animation[0]], group);
    useEffect(() => {
        if (actions[animation]){
            actions[animation].reset().fadeIn(0.5).play();

            return () => {
                actions[animation].reset().fadeOut(0.5);
            }
        } else {
            console.log("No animation found");
        }
    }, [animation]);

    useFrame((state) => {
        if(headFollow) {
            group.current.getObjectByName("Head").lookAt(state.camera.position);
        }
        if(cursorFollow){
            const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
            group.current.getObjectByName("Spine2").lookAt(target);
        }
    })
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
    const { nodes, materials } = useGraph(clone)


  return (
    <group {...props} ref={group} dispose={null}>
    <group rotation-x = {-Math.PI / 2}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
    </group>
  )
}

useGLTF.preload('module/bistrel.glb')