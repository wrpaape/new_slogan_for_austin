# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150620002231) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",                   null: false
    t.integer  "rating",     default: 0
    t.integer  "likes",      default: 0
    t.integer  "hates",      default: 0
    t.integer  "user_id",                null: false
    t.integer  "slogan_id",              null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "comments", ["slogan_id"], name: "index_comments_on_slogan_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "rates", force: :cascade do |t|
    t.integer  "likes",      default: 0
    t.integer  "hates",      default: 0
    t.integer  "user_id",                null: false
    t.integer  "slogan_id"
    t.integer  "comment_id"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "rates", ["comment_id"], name: "index_rates_on_comment_id", using: :btree
  add_index "rates", ["slogan_id"], name: "index_rates_on_slogan_id", using: :btree
  add_index "rates", ["user_id"], name: "index_rates_on_user_id", using: :btree

  create_table "slogans", force: :cascade do |t|
    t.string   "body",                         null: false
    t.integer  "rating",         default: 0
    t.integer  "likes",          default: 0
    t.integer  "hates",          default: 0
    t.integer  "comments_count", default: 0
    t.float    "trend_coeff",    default: 0.0
    t.text     "trend_coeffs",   default: ""
    t.integer  "user_id",                      null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  add_index "slogans", ["user_id"], name: "index_slogans_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",                        null: false
    t.string   "password_digest",             null: false
    t.integer  "slogans_count",   default: 0
    t.integer  "comments_count",  default: 0
    t.integer  "rating",          default: 0
    t.integer  "rating_slogan",   default: 0
    t.integer  "rating_comment",  default: 0
    t.integer  "likes",           default: 0
    t.integer  "likes_slogan",    default: 0
    t.integer  "likes_comment",   default: 0
    t.integer  "hates",           default: 0
    t.integer  "hates_slogan",    default: 0
    t.integer  "hates_comment",   default: 0
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_foreign_key "comments", "slogans"
  add_foreign_key "comments", "users"
  add_foreign_key "rates", "comments"
  add_foreign_key "rates", "slogans"
  add_foreign_key "rates", "users"
  add_foreign_key "slogans", "users"
end
