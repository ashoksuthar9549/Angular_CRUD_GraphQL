import { gql } from 'apollo-angular';

export const createUser = gql`
mutation CreateUser($firstName: String, $password: String, $email: String, $lastName: String, $userName: String, $phoneNo: String, $dateOfBirth: Date) {
  createUser(first_name: $firstName, password: $password, email: $email, last_name: $lastName, user_name: $userName, phone_no: $phoneNo, date_of_birth: $dateOfBirth) {
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
}`;

export const updateUser = gql`
mutation UpdateUser($uuid: UUID, $firstName: String, $lastName: String, $userName: String, $email: String, $dateOfBirth: Date, $phoneNo: String) {
  updateUser(uuid: $uuid, first_name: $firstName, last_name: $lastName, user_name: $userName, email: $email, date_of_birth: $dateOfBirth, phone_no: $phoneNo) {
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
`;

export const deleteUser = gql`
mutation DeleteUser($uuid: UUID) {
  deleteUser(uuid: $uuid) {
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
`;

export const changeUserStatus =gql`
mutation ChangeUserStatus($uuid: UUID, $status: Int) {
  changeUserStatus(uuid: $uuid, status: $status) {
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
`;
