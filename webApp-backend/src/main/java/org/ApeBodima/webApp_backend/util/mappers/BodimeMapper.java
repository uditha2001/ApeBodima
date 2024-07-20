package org.ApeBodima.webApp_backend.util.mappers;

import org.ApeBodima.webApp_backend.DTO.request.BodimeContactSaveDTO;
import org.ApeBodima.webApp_backend.DTO.request.BodimeDetailsSaveDTO;
import org.ApeBodima.webApp_backend.DTO.request.BodimeReviewSaveDTO;
import org.ApeBodima.webApp_backend.entity.Bodime_Contact;
import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.ApeBodima.webApp_backend.entity.Bodime_Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;


@Mapper(componentModel = "spring")
public interface BodimeMapper {

    @Mappings({
            @Mapping(target = "bodimId", source = "bodime_detail.bodimId"),
            @Mapping(target = "price", source = "bodime_detail.price"),
            @Mapping(target = "capacity", source = "bodime_detail.capacity"),
            @Mapping(target = "distanceToUni", source = "bodime_detail.distanceToUni"),
            @Mapping(target = "type", source = "bodime_detail.type"),
            @Mapping(target = "numChairs", source = "bodime_detail.numChairs"),
            @Mapping(target = "numFans", source = "bodime_detail.numFans"),
            @Mapping(target = "numTables", source = "bodime_detail.numTables"),
            @Mapping(target = "numNets", source = "bodime_detail.numNets"),
            @Mapping(target = "kitchen", source = "bodime_detail.kitchen"),
            @Mapping(target = "rating", source = "bodime_detail.rating"),
            @Mapping(target = "locationAddress", source = "bodime_detail.locationAddress"),
            @Mapping(target = "nearestCity", source = "bodime_detail.nearestCity"),
            @Mapping(target = "bodimPlaceName", source = "bodime_detail.bodimPlaceName"),
            @Mapping(target = "contacts", source = "bodime_contacts"),
            @Mapping(target = "reviews", source = "bodime_reviews"),
            @Mapping(target = "webApp_user", source = "webApp_user")


    })
    BodimeDetailsSaveDTO bodimeDetailToBodimeDetailsSaveDTO(Bodime_Detail bodime_detail);
    @Mappings({

            @Mapping(target = "contact_num",source = "bodime_contact.contact_num"),
    })
    BodimeContactSaveDTO contactEntityToDTO(Bodime_Contact bodime_contact);


    @Mappings({

            @Mapping(target = "commentId",source = "bodime_review.commentId"),
            @Mapping(target= "comment",source = "bodime_review.comment" )
    })
    BodimeReviewSaveDTO reviewEntityToDTO(Bodime_Review bodime_review);



    List<BodimeContactSaveDTO> entityListToDTOList(List<Bodime_Contact> bodime_contacts);

    List<BodimeReviewSaveDTO> entityListToDTOList2(List<Bodime_Review> bodime_reviews);







    List<BodimeDetailsSaveDTO> entityListToDoList3(List<Bodime_Detail> bodime_details);
    List<BodimeDetailsSaveDTO> pagetoDtoList(Page<Bodime_Detail> bodime_detail);




}
