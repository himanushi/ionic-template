import { IonApp, IonContent, IonPage, IonRouterOutlet } from "@ionic/react";
import { setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

/* Ionic Framework css */
/* Core css */
import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
/* Recommended css */
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Optional css */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

import { Page } from "~/pages/Page";
import "~/theme/custom.css";
import "~/theme/variables.css";

setupIonicReact({ mode: "ios" });

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonPage id="page">
          <IonContent scrollY={false} scrollX={false} fullscreen>
            <IonRouterOutlet>
              <Route exact path="/" component={Page} />
            </IonRouterOutlet>
          </IonContent>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
