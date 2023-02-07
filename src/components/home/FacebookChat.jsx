import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const FacebookChat = () => {
  // let pageId = 658947352669766;
  // let accessToken = ee256a59c1eb0a809ff2c053847fe2a3;
  // let entryPointIcon = "";
  // let welcomeText = "";
  // let entryPointLabel = "";
  // let themeColor = "";

  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "API-VERSION",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          bottom: "24px",
          right: "4px",
          cursor: "pointer",
        }}
        className="fb-customerchat"
        // page_id={pageId}
        // welcome_screen_greeting={welcomeText}
        // theme_color={themeColor}
        // entry_point_icon={entryPointIcon}
        // entry_point_label={entryPointLabel}
        // access_token={accessToken}
        ref={(elem) => (elem ? elem.setAttribute("page_id", "PAGE-ID") : null)}
      />
      <Box
        sx={{ position: "fixed", width: "100%", bottom: "24px", right: "0px" }}
      >
        Hello
      </Box>
    </div>
  );
};

export default FacebookChat;
