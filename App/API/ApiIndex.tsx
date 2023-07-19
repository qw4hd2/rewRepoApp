import axios from 'axios';
import {useState} from 'react';
export const login = async (
  email: string,
  password: string,
  navigation: any,
) => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password2', password);

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/validate.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const RegistrationApi = async (
  firstName: any,
  lastName: any,
  email: any,
  address: any,
  phonenumber: number,
  password2: any,
  address2: any,
  companyname: any,
) => {
  try {
    const formData = new FormData();
    formData.append('firstname', firstName);
    formData.append('lastname', lastName);
    formData.append('email', email);
    formData.append('phonenumber', phonenumber);
    formData.append('password2', password2);
    formData.append('address', address);
    formData.append('address2', address2);
    formData.append('companyname', companyname);
    formData.append('city', 'city');
    formData.append('state', 'state');
    formData.append('postcode', '33444');
    formData.append('country', 'US');

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/register_user.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const GetClientDetail = async (client_id: string) => {
  try {
    const formData = new FormData();
    formData.append('client_id', client_id);

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/clientdetails.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};

export const GetClientProducts = async (client_id: string) => {
  try {
    const formData = new FormData();
    formData.append('client_id', client_id);

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/getclientsProducts.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const OpenTicket = async (
  client_id: string,
  deptid: string,
  subject: any,
  message: string,
) => {
  try {
    const formData = new FormData();
    formData.append('client_id', client_id);
    formData.append('userid', client_id);
    formData.append('message', message);
    formData.append('subject', subject);
    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/openticket.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const Gettickets = async (clientid: string) => {
  try {
    const formData = new FormData();
    formData.append('clientid', clientid);

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/gettickets.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const GetAffliate = async (clientid: string) => {
  try {
    const formData = new FormData();
    formData.append('clientid', clientid);

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/getaffiliates.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const getTicket = async (ticketid: string) => {
  try {
    const formData = new FormData();
    formData.append('ticketid', ticketid);

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/getTicket.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const addTicketReplyy = async (
  ticketid: string,
  message: string,
  clientid: string,
  uri: string,
  name: string,
  filetype: string,
) => {
  try {
    const formData = new FormData();
    formData.append('ticketid', ticketid);
    formData.append('message', message);
    formData.append('clientid', clientid);
    formData.append('uri', uri);
    formData.append('name', name);
    formData.append('filetype', filetype);

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/addTicketReply.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const getProductt = async () => {
  try {
    const response = await axios.get(
      'https://appdev.choiceiptv.com/api/getproducts.php',
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const GetInvoicess = async (userid: string) => {
  try {
    const formData = new FormData();
    formData.append('userid', userid);

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/GetInvoices.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const Getinvoice = async (invoiceid: string) => {
  try {
    const formData = new FormData();
    formData.append('invoiceid', invoiceid);

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/GetInvoice.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const GetAnnouncements = async () => {
  try {
    const response = await axios.get(
      'https://appdev.choiceiptv.com/api/GetAnnouncements.php',
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const ResetPassoword = async (email: string) => {
  try {
    const formData = new FormData();
    formData.append('email', email);

    const response = await axios.post(
      'https://appdev.choiceiptv.com/api/resetpassword.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};

export const getKnowelegdeBaseAPI = async () => {
  try {
    const response = await axios.get(
      'https://appdev.choiceiptv.com/api/GetAllCategories.php',
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const getlatestMoviesAPI = async () => {
  try {
    const response = await axios.get(
      'https://appdev.choiceiptv.com/api/xui_get_movies.php',
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const getBouquets = async () => {
  try {
    const response = await axios.get(
      'https://dev.unitychan.nl/devapi123/?api_key=677F405D9DAABEEC829A9A02DCF1909F&action=get_bouquets',
    );

    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
// export const getStreamApi = async () => {
//   try {
//     const response = await axios.get(
//       'https://dev.unitychan.nl/devapi123/?api_key=677F405D9DAABEEC829A9A02DCF1909F&action=get_streams',
//     );

//     return response.data;
//   } catch (error) {
//     // Handle error here
//     console.error(error);
//   }
// };
export const getStreamApi = async () => {
  try {
    const response = await axios.get(
      'https://api.unitychan.nl/?api_key=NTafVRpzC3WLBavYPL3bP3BXchSreMqHFnKr7U8RY4WCmTEHPVmRhqEe5NAprPpP&action=get_streams',
    );

    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const getLatestMovieApi = async () => {
  try {
    const response = await axios.get(
      'https://dev.unitychan.nl/devapi123/?api_key=677F405D9DAABEEC829A9A02DCF1909F&action=get_movies',
    );

    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const getLatestSeriesListApi = async () => {
  try {
    const response = await axios.get(
      'https://dev.unitychan.nl/devapi123/?api_key=677F405D9DAABEEC829A9A02DCF1909F&action=get_series_list',
    );

    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
export const getprepopulatedBouquetAPI = async () => {
  try {
    const response = await axios.get(
      'https://dev.unitychan.nl/devapi123/?api_key=677F405D9DAABEEC829A9A02DCF1909F&action=get_line&id=1',
    );

    return response.data;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};
//  get stream APi
export const passwordUpdateeditLine = async (
  clientId: any,
  orderId: any,
  password: any,
  id: any,
) => {
  try {
    const response = await axios.get('https://api.unitychan.nl/', {
      params: {
        api_key:
          'NTafVRpzC3WLBavYPL3bP3BXchSreMqHFnKr7U8RY4WCmTEHPVmRhqEe5NAprPpP',
        action: 'edit_line',
        id: id,
        password: password,
        clientId: clientId,
        orderId: orderId,
      },
    });

    // Handle the response here
    console.log(response.data);
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};
export const usernameupdate = async (
  clientId: any,
  orderId: any,
  username: any,
  id: any,
) => {
  try {
    const response = await axios.get('https://api.unitychan.nl/', {
      params: {
        api_key:
          'NTafVRpzC3WLBavYPL3bP3BXchSreMqHFnKr7U8RY4WCmTEHPVmRhqEe5NAprPpP',
        action: 'edit_line',
        id: id,
        username: username,
        clientId: clientId,
        orderId: orderId,
      },
    });

    // Handle the response here
    console.log(response.data);
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};
