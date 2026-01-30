import React from "react";
// import FortuneSheetCustomNew from './components/FortuneSheet/FortuneSheetCustomNew';
// import { Layout, Button } from "antd";
// import Toolbar from "./components/Univer/toolbar/Toolbar";
// import SheetContainer from "./components/Univer/SheetContainer";
// import NotesPanel from "./components/Univer/panels/NotesPanel";

// const { Header, Content } = Layout;

import MySpreadsheet from './components/Univer_v2/MySpreadsheet';

const App = () => {
  // const [notesOpen, setNotesOpen] = useState(false);

  return (
    <MySpreadsheet />
    // <FortuneSheetCustomNew />
    // <Layout style={{ height: "100vh" }}>
    //   <Header>
    //     <Toolbar />
    //     <Button onClick={() => setNotesOpen(true)}>Notes</Button>
    //   </Header>

    //   <Content>
    //     <SheetContainer />
    //   </Content>

    //   <NotesPanel open={notesOpen} onClose={() => setNotesOpen(false)} />
    // </Layout>
  );
};

export default App;
