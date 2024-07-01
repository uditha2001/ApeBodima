package org.ApeBodima.webApp_backend.service.IMPL;

import org.ApeBodima.webApp_backend.DTO.request.BodimeDetailsSaveDTO;
import org.ApeBodima.webApp_backend.entity.Bodime_Contact;
import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.ApeBodima.webApp_backend.entity.Bodime_Review;
import org.ApeBodima.webApp_backend.repository.BodimeDetailsContactRepo;
import org.ApeBodima.webApp_backend.repository.BodimeDetailsRepo;
import org.ApeBodima.webApp_backend.repository.BodimeReviewRepo;
import org.ApeBodima.webApp_backend.service.BodimeDetailsService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BodimeDetailsServiceIMPL implements BodimeDetailsService {
    @Autowired
    private BodimeDetailsRepo bodimeDetailsRepo;

    @Autowired
    private BodimeDetailsContactRepo bodimeDetailsContactRepo;

    @Autowired
    private BodimeReviewRepo bodimeReviewRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String save(BodimeDetailsSaveDTO bodimeDetailsSaveDTO) {
        Bodime_Detail bodime_detail = new Bodime_Detail(
                bodimeDetailsSaveDTO.getBodimId(),
                bodimeDetailsSaveDTO.getPrice(),
                bodimeDetailsSaveDTO.getCapacity(),
                bodimeDetailsSaveDTO.getDistanceToUni(),
                bodimeDetailsSaveDTO.getType(),
                bodimeDetailsSaveDTO.getNumChairs(),
                bodimeDetailsSaveDTO.getNumFans(),
                bodimeDetailsSaveDTO.getNumTables(),
                bodimeDetailsSaveDTO.getNumNets(),
                bodimeDetailsSaveDTO.getKitchen(),
                bodimeDetailsSaveDTO.getLocationAddress(),
                bodimeDetailsSaveDTO.getBodimPlaceName()


        );
        bodimeDetailsRepo.save(bodime_detail);

        if(bodimeDetailsRepo.existsById(bodime_detail.getBodimId())){
            List<Bodime_Contact> bodime_contacts = modelMapper.map(
                    bodimeDetailsSaveDTO.getContacts(),new TypeToken<List<Bodime_Contact>>(){

                    }.getType());

            List<Bodime_Review> bodime_reviews = modelMapper.map(
                    bodimeDetailsSaveDTO.getReviews(),new TypeToken<List<Bodime_Review>>(){

                    }.getType());


            for(int i=0;i<bodime_contacts.size();i++){
                bodime_contacts.get(i).setBodime_details(bodime_detail);
            }
            for(int i=0;i<bodime_reviews.size();i++){
                bodime_reviews.get(i).setBodime_details(bodime_detail);
            }

            if(bodime_contacts.size()>0){
                bodimeDetailsContactRepo.saveAll(bodime_contacts);
            }
            if(bodime_reviews.size()>0){
                bodimeReviewRepo.saveAll(bodime_reviews);
            }
            return "Bodime added successfully";

        }
        return "error occurd";

    }




}
