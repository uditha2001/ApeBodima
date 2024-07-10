package org.ApeBodima.webApp_backend.DTO.request;

public class BodimFilterDTO {
    private Double minPrice;
    private Double maxPrice;
    private String type;

    public Double getMinPrice() {
        return minPrice;
    }

    public Double getMaxPrice() {
        return maxPrice;
    }

    public String getType() {
        return type;
    }

    public void setMinPrice(Double minPrice) {
        this.minPrice = minPrice;
    }

    public void setMaxPrice(Double maxPrice) {
        this.maxPrice = maxPrice;
    }

    public void setType(String type) {
        this.type = type;
    }
}
