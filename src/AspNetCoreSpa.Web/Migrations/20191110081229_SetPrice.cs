using Microsoft.EntityFrameworkCore.Migrations;

namespace AspNetCoreSpa.Web.Migrations
{
    public partial class SetPrice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("update orders set Price=1.1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
