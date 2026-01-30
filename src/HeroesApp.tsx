import { AuthProbider } from "./auth";
import { AppRouter } from "./router/AppRouter";


export const HeroesApp = () => {
  return (
    <>
      <AuthProbider>

        <AppRouter />


      </AuthProbider>


    </>
  );
};
