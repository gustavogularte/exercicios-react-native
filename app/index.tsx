import Button from '@/components/Button/Button';
import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.center}>
      <Ionicons name='logo-react' size={200}/>
      <Text>Lista de exercícios com React Native</Text>
      <Button>Ver lista</Button>
    </View>
  );
}
