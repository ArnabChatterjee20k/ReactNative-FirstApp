import { View, FlatList } from 'react-native';
import GoalItem from "./GoalItem";
import { useGoalContext } from "../context/GoalContext";
import styles from '../styles/style';

export default function GoalContainer() {
    const {goals} = useGoalContext()
    return (
    <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            const { index, item: goal } = itemData;
            return <GoalItem goal={goal}/>
          }}
          keyExtractor={(goals,index)=>{return index}}
        ></FlatList>
      </View>
  )
}
