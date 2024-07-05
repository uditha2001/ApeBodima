package org.ApeBodima.webApp_backend.config.modelMaping;


import org.ApeBodima.webApp_backend.util.mappers.BodimeMapper;
import org.mapstruct.factory.Mappers;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }



}
