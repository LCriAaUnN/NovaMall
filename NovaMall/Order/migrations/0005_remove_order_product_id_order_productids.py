# Generated by Django 5.0.2 on 2024-04-10 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Order', '0004_alter_order_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='product_id',
        ),
        migrations.AddField(
            model_name='order',
            name='productIDs',
            field=models.JSONField(default=''),
            preserve_default=False,
        ),
    ]
