package com.nt.rookie.post.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
@Getter
@Setter
public class AssetDto {
    private String assetCode;
    private String assetName;
    private CategoryDto category;
    private int state;
    private String specification;
    private Date installedDate;
}
