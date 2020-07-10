defmodule WcaLive.Repo.Migrations.CreateRegistrations do
  use Ecto.Migration

  def change do
    create table(:registrations) do
      add :wca_registration_id, :integer, null: false
      add :status, :string, null: false
      add :guests, :integer, null: false
      add :comments, :string, null: false
      add :event_ids, {:array, :string}, null: false, default: []
      add :person_id, references(:people, on_delete: :delete_all), null: false
    end

    create unique_index(:registrations, [:person_id])
  end
end
