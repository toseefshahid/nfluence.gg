import WebApiConfig from "./webapi-config";

export default class SocialMediaSignUpAPI {
  // handleResponse(response) {
  //   return response.text().then(text => {
  //     const data = text && JSON.parse(text);
  //     if (!response.ok) {
  //       const error =
  //         (data && data.message) || response.statusText;
  //       return Promise.reject(error);
  //     }
  //     return data;
  //   });
  // }

 handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      return Promise.reject(data);
    }
    return data;
  });
}

  async loginWithTwitch(twitchAccess) {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(twitchAccess),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    return fetch(
      `${WebApiConfig.BaseURL}/auth/twitch/`,
      requestOptions
    )
      .then(response => this.handleResponse(response))
      .then(response => {
        return response;
      });
  }

  async subscribe(body) {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    return fetch(`${WebApiConfig.BaseURL}/subscribe/`, requestOptions)
      .then(response => this.handleResponse(response))
      .then(response => {
        return response;
      });
  }
}
