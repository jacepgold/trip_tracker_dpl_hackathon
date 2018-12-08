# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

10.times do
  Address.create(
    state: Faker::Address.state,
    city: Faker::Address.city,
    zip: Faker::Address.zip,
    street: Faker::Address.street_name,
    building_number: Faker::Address.building_number
  );
end

10.times do |i|
  Location.create(
    name: "TEST #{i}"
  );
end

10.times do |i|
  Trip.create(
    name: Faker::Address.country,
    description: Faker::DumbAndDumber.quote
  );
end