import { View, FlatList,Text } from 'react-native';
import GoalItem from "./GoalItem";
import { useGoalContext } from "../context/GoalContext";
import styles from '../styles/style';

export default function GoalContainer() {
    const {goals} = useGoalContext()
    return (
    <View style={styles.goalsContainer}>
      <Text>Your Task..</Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            const { index, item: goal } = itemData;
            const {title,description} = goal
            return <GoalItem goal={goal} id={index} title={title} description={description}/>
          }}
          keyExtractor={(goals,index)=>{return index}}
        ></FlatList>
      </View>
  )
}
