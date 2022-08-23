package com.nt.rookie.post.mapper;

import com.nt.rookie.post.dto.AssetDto;
import com.nt.rookie.post.model.Asset;

public class AssetMapper {
    public static AssetDto toDto(Asset asset) {
        AssetDto result = new AssetDto();
        result.setAssetCode(asset.getAssetCode());
        result.setAssetName(asset.getAssetName());
        result.setCategory(CategoryMapper.toDto(asset.getCategory()));
        result.setState(asset.getState());
        result.setSpecification(asset.getSpecification());
        result.setInstalledDate(asset.getInstalledDate());
        return result;
    }

    public static Asset toEntity(AssetDto asset) {
        Asset result = new Asset();
        result.setAssetCode(asset.getAssetCode());
        result.setAssetName(asset.getAssetName());
        result.setCategory(CategoryMapper.toEntity(asset.getCategory()));
        result.setState(asset.getState());
        result.setSpecification(asset.getSpecification());
        result.setInstalledDate(asset.getInstalledDate());
        return result;
    }
}
