import { PageComponent } from "rasengan";

const Home: PageComponent = () => {
  return (
   <div>
    Something
   </div>
  );
}

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;