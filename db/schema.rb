
ActiveRecord::Schema.define(version: 2019_12_20_101830) do

  create_table "fruits", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
