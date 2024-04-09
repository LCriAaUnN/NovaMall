# Generated by Django 4.2.5 on 2024-04-05 08:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("ShoppingCart", "0003_alter_cart_user"),
    ]

    operations = [
        migrations.AlterField(
            model_name="cart",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="carts",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]