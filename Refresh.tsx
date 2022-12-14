import React, { useState } from "react";
import { TouchableOpacity, Animated, Image } from "react-native";

const Refresh = () => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "720deg"],
  });

  return (
    <TouchableOpacity
      onPress={async () => handleAnimation()}
      style={{ width: 60 }}
    >
      <Animated.Image
        style={{
          transform: [
            {
              rotate: interpolateRotating,
            },
          ],
          tintColor:"white",
        }}
        source={require("../assets/icons/refresh.png")}
      ></Animated.Image>
    </TouchableOpacity>
  );
};

export default Refresh;