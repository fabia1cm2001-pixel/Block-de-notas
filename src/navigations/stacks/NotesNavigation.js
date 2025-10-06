import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotesListScreen, NoteEditorScreen, NoteViewScreen } from "../../screens/Notes";
import { screens } from "../../utils";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export function NotesNavigation() {
  return (
    <Stack.Navigator screenOptions={{ ...styles?.stackNavigationStyles }}>
      <Stack.Screen name={screens.tab.notes.notesListScreen} component={NotesListScreen} options={{ title: "Notas" }} />
      <Stack.Screen name={screens.tab.notes.noteEditorScreen} component={NoteEditorScreen} options={{ title: "Editar Nota" }} />
      <Stack.Screen name={screens.tab.notes.noteViewScreen} component={NoteViewScreen} options={{ title: "Detalle" }} />
    </Stack.Navigator>
  );
}