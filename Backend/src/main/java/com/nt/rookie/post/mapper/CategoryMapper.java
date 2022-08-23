package com.nt.rookie.post.mapper;

import com.nt.rookie.post.dto.CategoryDto;
import com.nt.rookie.post.model.Category;

public class CategoryMapper {
    public static CategoryDto toDto(Category category) {
        CategoryDto result = new CategoryDto();
        result.setCategoryCode(category.getCategoryCode());
        result.setCategoryName(category.getCategoryName());
        return result;
    }
    public static Category toEntity(CategoryDto categoryDto) {
        Category result = new Category();
        result.setCategoryCode(categoryDto.getCategoryCode());
        result.setCategoryName(categoryDto.getCategoryName());
        return result;
    }


}
