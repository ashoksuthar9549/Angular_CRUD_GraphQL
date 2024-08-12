import { gql } from 'apollo-angular';

export const fetchUsers = gql`
query FetchUsers($limit: Int, $sortBy: String, $sortOrder: String, $page: Int, $email: String, $status: Int, $phoneNo: String, $fullName: String) {
  fetchUsers(limit: $limit, sortBy: $sortBy, sortOrder: $sortOrder, page: $page, email: $email, status: $status, phone_no: $phoneNo, full_name: $fullName) {
    data {
      userList {
        id
        uuid
        first_name
        middle_name
        last_name
        user_name
        email
        gender
        date_of_birth
        phone_no
        phone_country_id
        role
        user_type
        profile_img
        device_type
        device_token
        status
        created_at
        updated_at
        serialNo
      }
      count
    }
    meta {
      message
      messageCode
      statusCode
      status
      type
      errors {
        errorField
        error
      }
      errorType
    }
  }
}
`

// export const fetchUsers = gql`
// query FetchUsers {
//   fetchUsers {
//     data {
//       userList {
//         id
//         uuid
//         first_name
//         middle_name
//         last_name
//         user_name
//         email
//         gender
//         date_of_birth
//         phone_no
//         phone_country_id
//         role
//         user_type
//         profile_img
//         device_type
//         device_token
//         status
//         created_at
//         updated_at
//         serialNo
//       }
//       count
//     }
//     meta {
//       message
//       messageCode
//       statusCode
//       status
//       type
//       errors {
//         errorField
//         error
//       }
//       errorType
//     }
//   }
// }
// `;

export const getUser = gql`
query GetUser($uuid: UUID) {
  getUser(uuid: $uuid) {
    data {
      id
      uuid
      first_name
      middle_name
      last_name
      user_name
      email
      gender
      date_of_birth
      phone_no
      phone_country_id
      role
      user_type
      profile_img
      device_type
      device_token
      status
      created_at
      updated_at
      serialNo
    }
    meta {
      message
      messageCode
      statusCode
      status
      type
      errors {
        errorField
        error
      }
      errorType
    }
  }
}

`