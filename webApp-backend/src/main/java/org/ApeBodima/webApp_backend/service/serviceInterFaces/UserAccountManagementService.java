package org.ApeBodima.webApp_backend.service.serviceInterFaces;

import org.ApeBodima.webApp_backend.DTO.userManagement.UserManagementDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UserAccountManagementService {
    UserManagementDTO getAccountUserData();

    String updateUserDetails(UserManagementDTO userManagementDTO);

    String updateUserPassword(String oldPass, String newPass1, String newPass2);

    String uploadProfImage(MultipartFile file) throws IOException;

    String deleteAccount(String userPassword);
}
