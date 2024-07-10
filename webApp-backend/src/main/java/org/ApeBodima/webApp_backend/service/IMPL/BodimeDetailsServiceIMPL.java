package org.ApeBodima.webApp_backend.service.IMPL;

import org.ApeBodima.webApp_backend.DTO.request.BodimeContactSaveDTO;
import org.ApeBodima.webApp_backend.DTO.request.BodimeDetailsSaveDTO;
import org.ApeBodima.webApp_backend.entity.Bodime_Contact;
import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.ApeBodima.webApp_backend.entity.Bodime_Review;
import org.ApeBodima.webApp_backend.repository.BodimeDetailsContactRepo;
import org.ApeBodima.webApp_backend.repository.BodimeDetailsRepo;
import org.ApeBodima.webApp_backend.repository.BodimeReviewRepo;
import org.ApeBodima.webApp_backend.service.BodimeDetailsService;
import org.ApeBodima.webApp_backend.util.mappers.BodimeMapper;
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

    @Autowired
    private BodimeMapper bodimeMapper;

    @Override
    public String save(BodimeDetailsSaveDTO bodimeDetailsSaveDTO) {
        if (bodimeDetailsRepo.existsById(bodimeDetailsSaveDTO.getBodimId())) {
            return "Bodime already exists";
        } else {
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

            if (bodimeDetailsRepo.existsById(bodime_detail.getBodimId())) {
                List<Bodime_Contact> bodime_contacts = modelMapper.map(
                        bodimeDetailsSaveDTO.getContacts(), new TypeToken<List<Bodime_Contact>>() {

                        }.getType());

                List<Bodime_Review> bodime_reviews = modelMapper.map(
                        bodimeDetailsSaveDTO.getReviews(), new TypeToken<List<Bodime_Review>>() {

                        }.getType());


                for (int i = 0; i < bodime_contacts.size(); i++) {
                    bodime_contacts.get(i).setBodime_details(bodime_detail);
                }
                for (int i = 0; i < bodime_reviews.size(); i++) {
                    bodime_reviews.get(i).setBodime_details(bodime_detail);
                }

                if (bodime_contacts.size() > 0) {
                    bodimeDetailsContactRepo.saveAll(bodime_contacts);
                }
                if (bodime_reviews.size() > 0) {
                    bodimeReviewRepo.saveAll(bodime_reviews);
                }
                return "Bodime added successfully ";

            }
            return "error occurd";

        }
    }

    @Override
    public BodimeDetailsSaveDTO getBodimeDetailsById(String bodimId) {
        if(bodimeDetailsRepo.existsById(bodimId)){
            Bodime_Detail bodime_detail = bodimeDetailsRepo.getReferenceById(bodimId);
            BodimeDetailsSaveDTO bodimeDetailsSaveDto = new BodimeDetailsSaveDTO(
                    bodime_detail.getBodimId(),
                    bodime_detail.getPrice(),
                    bodime_detail.getCapacity(),
                    bodime_detail.getDistanceToUni(),
                    bodime_detail.getType(),
                    bodime_detail.getNumChairs(),
                    bodime_detail.getNumFans(),
                    bodime_detail.getNumTables(),
                    bodime_detail.getNumNets(),
                    bodime_detail.getKitchen(),
                    bodime_detail.getLocationAddress(),
                    bodime_detail.getBodimPlaceName(),
                    bodimeMapper.entityListToDTOList(bodime_detail.getBodime_contacts()),
                    bodimeMapper.entityListToDTOList2(bodime_detail.getBodime_reviews())

            );
            return bodimeDetailsSaveDto;
        }
        else{
            throw new RuntimeException("Not Found Bodime Details");
        }
    }

    @Override
    public List<BodimeDetailsSaveDTO> getAllBodimeDetails() {
        List<BodimeDetailsSaveDTO> bodimeDetailsSaveDTOS = bodimeMapper.entityListToDoList3(bodimeDetailsRepo.findAll());
        return bodimeDetailsSaveDTOS;
    }


}
