/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const partNames = [
  "nose",
  "leftEye",
  "rightEye",
  "leftEar",
  "rightEar",
  "leftShoulder",
  "rightShoulder",
  "leftElbow",
  "rightElbow",
  "leftWrist", // 9
  "rightWrist", // 10
  "leftHip",
  "rightHip",
  "leftKnee",
  "rightKnee",
  "leftAnkle",
  "rightAnkle",
  "leftMidfin", // 17
  "rightMidfin", // 18
  /*
    left hand oreintation using 9-17
    right hand oreintation using 10-18
    */
];

export const SELECTED_POSENET_JOINTS = [
  "nose",
  "leftEye",
  "rightEye",
  "leftEar",
  "rightEar",
  "leftShoulder",
  "rightShoulder",
  "leftElbow",
  "rightElbow",
  "leftWrist",
  "rightWrist",
  "leftMidfin",
  "rightMidfin",
];

export const SELECTED_FACE_POINTS = [
  78,
  191,
  80,
  13,
  310,
  415,
  308,
  324,
  318,
  14,
  88,
  95,
  107,
  69,
  105,
  52,
  159,
  145,
  336,
  299,
  334,
  282,
  386,
  374,
];

export const LABELS = [
  "0_Idle",
  "Hksl_可以",
  "Hksl_熊猫",
  "Hksl_自行车-Jsl_自行车",
  "Hksl_忙碌",
  "Hksl_胡萝卜",
  "Hksl_厨师",
  "Hksl_咖啡",
  "Hksl_正确",
  "Hksl_狗",
  "Hksl_蜻蜓",
  "Hksl_结束",
  "Hksl_拖鞋",
  "Hksl_算命先生",
  "Hksl_花园",
  "Hksl_生姜",
  "Hksl_好",
  "Hksl_草",
  "Hksl_灰色的",
  "Hksl_帽子-Jsl_cap", //19
  "Hksl_助听器-Jsl_助听器", //20
  "Hksl_高跟鞋",
  "Hksl_你好吗",
  "Hksl_慢悠悠的",
  "Hksl_就这样吧",
  "Hksl_口红",
  "Hksl_核心",
  "Hksl_事情",
  "Hksl_奶茶",
  "Hksl_摩托车-Jsl_摩托车", //29
  "Hksl_堵塞",
  "Hksl_邮局",
  "Hksl_紫色",
  "Hksl_读",
  "Hksl_鲨鱼",
  "Hksl_签名",
  "Hksl_软饮料",
  "Hksl_特殊的",
  "Hksl_奇怪的",
  "Hksl_夏天",
  "Hksl_太阳镜",
  "Hksl_超市",
  "Hksl_老虎",
  "Hksl_西红柿",
  "Hksl_困难",
  "Hksl_理解",
  "Hksl_西瓜",
  "Hksl_欢迎",
  "Hksl_葡萄",
  "Hksl_冬天-Jsl_冬天", //49
  "Hksl_担心",
  "Hksl_写字",
  "Hksl_肯定",
  "Jsl_年龄",
  "Jsl_ahh",
  "Jsl_be_good_at",
  "Jsl_bird",
  "Jsl_brown",
  "Jsl_canteen",
  "Jsl_胡萝卜",
  "Jsl_cat",
  "Jsl_department_store",
  "Jsl_狗",
  "Jsl_蜻蜓",
  "Jsl_draught_beer",
  "Jsl_dream",
  "Jsl_earring",
  "Jsl_elevator",
  "Jsl_example",
  "Jsl_fly",
  "Jsl_geta",
  "Jsl_get_up",
  "Jsl_goldfish",
  "Jsl_gray",
  "Jsl_hello_with_one_hand",
  "Jsl_hello_with_two_hands",
  "Jsl_高跟鞋",
  "Jsl_hot_spring",
  "Jsl_illness",
  "Jsl_imagination",
  "Jsl_insect",
  "Jsl_japanese_radish",
  "Jsl_law",
  "Jsl_lemon",
  "Jsl_lie",
  "Jsl_奶茶",
  "Jsl_orange_juice",
  "Jsl_oversleep",
  "Jsl_pine",
  "Jsl_programmer",
  "Jsl_rice_field",
  "Jsl_sports_athelets",
  "Jsl_strawberry",
  "Jsl_夏天",
  "Jsl_swim",
  "Jsl_tell_say",
  "Jsl_unique_not_usual",
  "Jsl_watch",
  "Jsl_葡萄",
  "Jsl_yellow",
];

export const MULTI_TAGS = {
  Hksl_自行车: 3,
  Jsl_自行车: 3,
  Hksl_帽子: 19,
  Jsl_cap: 19,
  Hksl_助听器: 20,
  Jsl_助听器: 20,
  Hksl_摩托车: 29,
  Jsl_摩托车: 29,
  Hksl_冬天: 49,
  Jsl_冬天: 49,
};
