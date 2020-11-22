# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2015_12_15_041127) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campers", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "campsite_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campsite_id"], name: "index_campers_on_campsite_id"
  end

  create_table "campsites", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "supplies", force: :cascade do |t|
    t.string "name"
    t.bigint "camper_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["camper_id"], name: "index_supplies_on_camper_id"
  end

end
