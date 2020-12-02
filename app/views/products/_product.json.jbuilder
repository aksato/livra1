json.extract! product, :id, :title, :description, :extension, :price, :created_at, :updated_at
json.url product_url(product, format: :json)
json.has_photo product.has_photo?
json.photo_path product.photo_path
